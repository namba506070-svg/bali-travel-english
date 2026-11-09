export function normalizeAnswer(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\bplease\b/g, " ")
    .replace(/[^a-z0-9'\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function evaluateAnswer(answer, lesson) {
  const normalized = normalizeAnswer(answer);
  if (!normalized) {
    return { status: "no-answer", message: "音声を認識できませんでした。回答の間違いにはしません。もう一度試すか、英文を入力してください。" };
  }

  const accepted = new Set(lesson.accepted.map(normalizeAnswer));
  if (accepted.has(normalized)) {
    return { status: "accepted", message: "合格です。短く自然に言えています。" };
  }

  return {
    status: "review",
    message: "登録済みの表現とは一致しませんでした。正しい英語の可能性もあるので、お手本と確認しましょう。"
  };
}
