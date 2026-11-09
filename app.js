import { LESSON_ID, getPattern, lessonIds, lessons, patterns } from "./data.js";
import { evaluateAnswer } from "./evaluator.js";

const STORAGE_KEY = "bali-travel-english-progress-v1";
const EXPORT_APP_ID = "bali-travel-english";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let progress = loadProgress();
let selectedPatternId = patterns[0].id;
let queue = [];
let queueIndex = 0;
let recognition = null;
let isListening = false;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const passed = Array.isArray(saved?.passed) ? saved.passed.filter((id) => lessonIds.includes(id)) : [];
    return { passed: [...new Set(passed)] };
  } catch {
    return { passed: [] };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, lessonId: LESSON_ID, passed: progress.passed }));
  renderProgress();
}

function isPassed(id) {
  return progress.passed.includes(id);
}

function setPassed(id, passed) {
  progress.passed = passed
    ? [...new Set([...progress.passed, id])]
    : progress.passed.filter((item) => item !== id);
  saveProgress();
  renderLessons();
  if (!$("#questionCard").classList.contains("hidden")) updatePassButton();
}

function renderProgress() {
  const count = progress.passed.length;
  $("#progressCount").textContent = `${count} / ${lessons.length}`;
  $("#progressBar").style.width = `${(count / lessons.length) * 100}%`;
  renderPatternSelector();
}

function selectedPattern() {
  return getPattern(selectedPatternId);
}

function selectedLessons() {
  return lessons.filter((lesson) => lesson.patternId === selectedPatternId);
}

function patternPassedCount(patternId) {
  return lessons.filter((lesson) => lesson.patternId === patternId && isPassed(lesson.id)).length;
}

function renderPatternSelector() {
  const pattern = selectedPattern();
  $("#patternProgressCount").textContent = `この構文 ${patternPassedCount(pattern.id)} / ${pattern.examples.length}`;
  $("#patternSelector").innerHTML = patterns.map((item, index) => `
    <button class="pattern-button ${item.id === selectedPatternId ? "active" : ""}" type="button" data-pattern="${item.id}" aria-pressed="${item.id === selectedPatternId}">
      <span>${index + 1}</span>
      <strong>${item.title}</strong>
      <small>${patternPassedCount(item.id)} / ${item.examples.length} 合格</small>
    </button>
  `).join("");
}

function renderPatternHeading() {
  const pattern = selectedPattern();
  const index = patterns.findIndex((item) => item.id === pattern.id);
  $("#lessonNumber").textContent = `構文 ${index + 1} / ${patterns.length}`;
  $("#lessonTitle").textContent = pattern.title;
  $("#lessonDescription").textContent = pattern.description;
}

function renderLessons() {
  $("#lessonList").innerHTML = selectedLessons().map((lesson, index) => `
    <article class="lesson-card ${isPassed(lesson.id) ? "passed" : ""}">
      <div class="lesson-index">${String(index + 1).padStart(2, "0")}</div>
      <div class="lesson-content">
        <div class="lesson-meta"><span>${lesson.scene}</span><span>${lesson.tone}</span></div>
        <p class="japanese">${lesson.japanese}</p>
        <p class="english" lang="en">${lesson.english}</p>
      </div>
      <div class="lesson-actions">
        <button class="speak-button" type="button" data-speak="${lesson.id}">▶ 聞く</button>
        <button class="pass-toggle" type="button" data-pass="${lesson.id}" aria-pressed="${isPassed(lesson.id)}">
          ${isPassed(lesson.id) ? "★ 合格" : "☆ 未合格"}
        </button>
      </div>
    </article>
  `).join("");
}

function speak(text, button) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = Number($("#speechRate").value);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find((voice) => voice.lang.startsWith("en-US")) || voices.find((voice) => voice.lang.startsWith("en")) || null;
  const original = button?.textContent;
  utterance.onstart = () => {
    document.body.classList.add("speaking");
    if (button) button.textContent = "■ 再生中";
  };
  utterance.onend = utterance.onerror = () => {
    document.body.classList.remove("speaking");
    if (button) button.textContent = original;
  };
  speechSynthesis.speak(utterance);
}

function setupSpeechSupport() {
  const synthesisAvailable = "speechSynthesis" in window;
  $("#speechSupport").textContent = synthesisAvailable
    ? "このブラウザでは、お手本の読み上げを利用できます。声の種類は端末により異なります。"
    : "このブラウザでは、お手本の読み上げを利用できません。英文を見て練習できます。";
  if (!synthesisAvailable) $$(".speak-button, #modelSpeak").forEach((button) => button.disabled = true);

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    $("#micButton").disabled = true;
    $("#micStatus").textContent = "このブラウザでは音声認識を利用できません。英文入力をお使いください。";
    return;
  }

  recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  recognition.onstart = () => setMicState("listening", "録音中です。英語を話してください。");
  recognition.onspeechend = () => {
    setMicState("processing", "音声を処理しています…");
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0]?.[0]?.transcript || "";
    setMicState("idle", "認識が終わりました。");
    showResult(transcript);
  };
  recognition.onnomatch = () => {
    setMicState("idle", "音声を認識できませんでした。間違いにはしません。もう一度お試しください。");
  };
  recognition.onerror = (event) => {
    const messages = {
      "not-allowed": "マイクの利用が許可されませんでした。英文入力はそのまま使えます。",
      "service-not-allowed": "音声認識サービスを利用できません。英文入力をお使いください。",
      "network": "音声認識に接続できませんでした。英文入力をお使いください。",
      "no-speech": "音声を認識できませんでした。間違いにはしません。もう一度お試しください。",
      "audio-capture": "マイクが見つかりません。英文入力をお使いください。"
    };
    setMicState("idle", messages[event.error] || "音声認識を利用できませんでした。英文入力をお使いください。");
  };
  recognition.onend = () => {
    if (isListening) setMicState("idle", $("#micStatus").textContent);
  };
}

function setMicState(state, message) {
  isListening = state !== "idle";
  $("#micButton").classList.toggle("recording", state === "listening");
  $("#micButton").classList.toggle("processing", state === "processing");
  $("#micLabel").textContent = state === "listening" ? "録音中…" : state === "processing" ? "処理中…" : "マイクで話す";
  $("#micStatus").textContent = message;
}

function startRecognition() {
  if (!recognition || isListening) return;
  const notice = "音声認識はブラウザの機能を使います。ブラウザによっては音声が外部サービスで処理され、インターネット接続が必要です。このアプリ自体は音声を保存しません。続けますか？";
  if (!sessionStorage.getItem("mic-notice-seen")) {
    if (!window.confirm(notice)) return;
    sessionStorage.setItem("mic-notice-seen", "yes");
  }
  $("#micStatus").textContent = "マイクを準備しています…";
  try { recognition.start(); } catch { setMicState("idle", "マイクを開始できませんでした。少し待ってからお試しください。"); }
}

function buildQueue() {
  const mode = document.querySelector('input[name="order"]:checked').value;
  const scope = document.querySelector('input[name="scope"]:checked').value;
  let items = scope === "all" ? [...lessons] : selectedLessons();
  if (mode === "unpassed") items = items.filter((lesson) => !isPassed(lesson.id));
  if (mode === "random" || scope === "all") {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  }
  queue = items;
  queueIndex = 0;
  if (!queue.length) {
    $("#questionCard").classList.add("hidden");
    $("#emptyTest").classList.remove("hidden");
    const targetName = scope === "all" ? "全10構文" : `「${selectedPattern().title}」`;
    $("#emptyTest").innerHTML = `<strong>${targetName}はすべて合格しています！</strong><br>未合格の問題はありません。別の範囲や出題方法を選ぶと、もう一度練習できます。`;
    return;
  }
  $("#emptyTest").classList.add("hidden");
  $("#questionCard").classList.remove("hidden");
  renderQuestion();
}

function currentLesson() { return queue[queueIndex]; }

function renderQuestion() {
  const lesson = currentLesson();
  $("#questionNumber").textContent = `${queueIndex + 1} / ${queue.length}`;
  $("#questionJapanese").textContent = lesson.japanese;
  $("#questionScene").textContent = lesson.scene;
  $("#resultArea").classList.add("hidden");
  $("#answerArea").classList.remove("hidden");
  $("#textAnswer").value = "";
  $("#micStatus").textContent = recognition ? "準備ができたら、マイクボタンを押してください。" : $("#micStatus").textContent;
  updatePassButton();
}

function updatePassButton() {
  const lesson = currentLesson();
  if (!lesson) return;
  const passed = isPassed(lesson.id);
  $("#manualPass").textContent = passed ? "★ 合格" : "☆ 未合格";
  $("#manualPass").setAttribute("aria-pressed", String(passed));
}

function showResult(answer) {
  const lesson = currentLesson();
  const result = evaluateAnswer(answer, lesson);
  $("#answerArea").classList.add("hidden");
  $("#resultArea").classList.remove("hidden");
  $("#userAnswer").textContent = answer || "（認識できませんでした）";
  $("#modelEnglish").textContent = lesson.english;
  $("#judgement").className = `judgement ${result.status}`;
  $("#judgement").innerHTML = `<strong>${result.status === "accepted" ? "合格" : result.status === "no-answer" ? "判定なし" : "お手本と確認"}</strong><p>${result.message}</p>`;
  if (result.status === "accepted") setPassed(lesson.id, true);
  $("#nextButton").textContent = queueIndex === queue.length - 1 ? "結果を見る" : "次の問題へ";
}

function nextQuestion() {
  if (queueIndex < queue.length - 1) {
    queueIndex += 1;
    renderQuestion();
    $("#questionCard").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  $("#questionCard").classList.add("hidden");
  $("#emptyTest").classList.remove("hidden");
  const passedInQueue = queue.filter((lesson) => isPassed(lesson.id)).length;
  $("#emptyTest").innerHTML = `<strong>全問終了しました。おつかれさまでした！</strong><br>今回の問題では ${passedInQueue} / ${queue.length} 問が合格です。設定を選んで、何度でも練習できます。`;
}

function switchMode(mode) {
  const learn = mode === "learn";
  $("#learnPanel").classList.toggle("hidden", !learn);
  $("#testPanel").classList.toggle("hidden", learn);
  $("#learnTab").classList.toggle("active", learn);
  $("#testTab").classList.toggle("active", !learn);
  $("#learnTab").setAttribute("aria-selected", String(learn));
  $("#testTab").setAttribute("aria-selected", String(!learn));
}

function exportProgress() {
  const payload = {
    appId: EXPORT_APP_ID,
    version: 1,
    exportedAt: new Date().toISOString(),
    lessonId: LESSON_ID,
    passed: progress.passed
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `bali-english-progress-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  $("#dataStatus").textContent = "進捗をJSONファイルに書き出しました。";
}

export function validateImport(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return { ok: false, error: "JSONの形式が正しくありません。" };
  if (data.appId !== EXPORT_APP_ID || data.version !== 1 || data.lessonId !== LESSON_ID) return { ok: false, error: "このアプリの進捗ファイルではありません。" };
  if (!Array.isArray(data.passed) || data.passed.some((id) => typeof id !== "string" || !lessonIds.includes(id))) return { ok: false, error: "合格データに不明な項目があります。" };
  if (new Set(data.passed).size !== data.passed.length) return { ok: false, error: "合格データに重複があります。" };
  return { ok: true, passed: data.passed };
}

async function importProgress(file) {
  try {
    if (!file || file.size > 100_000) throw new Error("ファイルが大きすぎるか、選択されていません。");
    const result = validateImport(JSON.parse(await file.text()));
    if (!result.ok) throw new Error(result.error);
    const importedCounts = patterns.map((pattern) => {
      const count = pattern.examples.filter((lesson) => result.passed.includes(lesson.id)).length;
      return `${pattern.title}：${count} / ${pattern.examples.length}`;
    });
    const message = [
      "読み込む進捗を確認してください。",
      `ファイル：${file.name}`,
      `現在の合格数：${progress.passed.length} / ${lessons.length}`,
      `読み込み後の合格数：${result.passed.length} / ${lessons.length}`,
      "",
      ...importedCounts,
      "",
      "現在の進捗を、この内容で上書きします。よろしいですか？"
    ].join("\n");
    if (!window.confirm(message)) {
      $("#dataStatus").textContent = "読み込みを取り消しました。現在の進捗は変わっていません。";
      return;
    }
    progress = { passed: [...result.passed] };
    saveProgress();
    renderLessons();
    $("#dataStatus").textContent = `進捗を読み込みました。合格は ${result.passed.length} / ${lessons.length} です。`;
  } catch (error) {
    $("#dataStatus").textContent = `読み込めませんでした：${error.message}`;
  } finally {
    $("#importInput").value = "";
  }
}

function bindEvents() {
  $("#lessonList").addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) speak(lessons.find((lesson) => lesson.id === speakButton.dataset.speak).english, speakButton);
    const passButton = event.target.closest("[data-pass]");
    if (passButton) setPassed(passButton.dataset.pass, !isPassed(passButton.dataset.pass));
  });
  $("#patternSelector").addEventListener("click", (event) => {
    const button = event.target.closest("[data-pattern]");
    if (!button || button.dataset.pattern === selectedPatternId) return;
    selectedPatternId = button.dataset.pattern;
    renderPatternHeading();
    renderPatternSelector();
    renderLessons();
    $("#questionCard").classList.add("hidden");
    $("#emptyTest").classList.add("hidden");
  });
  $("#learnTab").addEventListener("click", () => switchMode("learn"));
  $("#testTab").addEventListener("click", () => switchMode("test"));
  $("#startTest").addEventListener("click", buildQueue);
  $$("input[name=\"scope\"]").forEach((input) => input.addEventListener("change", syncScopeSettings));
  $("#micButton").addEventListener("click", startRecognition);
  $("#textAnswerForm").addEventListener("submit", (event) => { event.preventDefault(); showResult($("#textAnswer").value); });
  $("#retryButton").addEventListener("click", renderQuestion);
  $("#nextButton").addEventListener("click", nextQuestion);
  $("#manualPass").addEventListener("click", () => setPassed(currentLesson().id, !isPassed(currentLesson().id)));
  $("#modelSpeak").addEventListener("click", (event) => speak(currentLesson().english, event.currentTarget));
  $("#exportButton").addEventListener("click", exportProgress);
  $("#importInput").addEventListener("change", (event) => importProgress(event.target.files[0]));
  $("#helpButton").addEventListener("click", () => $("#helpDialog").showModal());
  $("#closeHelp").addEventListener("click", () => $("#helpDialog").close());
  $$(".course-tab").forEach((tab) => tab.addEventListener("click", () => {
    const basic = tab.dataset.course === "basic";
    $("#basicCourse").classList.toggle("hidden", !basic);
    $("#conversationCourse").classList.toggle("hidden", basic);
    $$(".course-tab").forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", String(item === tab));
    });
  }));
  $("#backToBasic").addEventListener("click", () => $$('.course-tab[data-course="basic"]')[0].click());
}

function syncScopeSettings() {
  const allPatterns = document.querySelector('input[name="scope"]:checked').value === "all";
  const ordered = document.querySelector('input[name="order"][value="ordered"]');
  ordered.disabled = allPatterns;
  if (allPatterns && ordered.checked) document.querySelector('input[name="order"][value="random"]').checked = true;
}

renderProgress();
renderPatternHeading();
renderLessons();
bindEvents();
setupSpeechSupport();

window.__travelEnglishTest = { validateImport, evaluateAnswer, lessons, patterns, getProgress: () => structuredClone(progress) };
