// Keep this legacy identifier and the existing example IDs for progress-file compatibility.
export const LESSON_ID = "can-i-have";

const ex = (id, japanese, english, scene, tone, accepted) => ({ id, japanese, english, scene, tone, accepted });

export const patterns = [
  {
    id: "can-i-have", title: "Can I have ～, please?", description: "「～をいただけますか？」気軽で自然な頼み方です。",
    examples: [
      ex("blanket", "毛布をいただけますか？", "Can I have a blanket, please?", "機内", "短く自然な頼み方", ["Can I have a blanket, please?", "Could I have a blanket, please?", "May I have a blanket, please?"]),
      ex("water", "お水を一杯いただけますか？", "Can I have a glass of water, please?", "機内・レストラン", "どこでも使いやすい表現", ["Can I have a glass of water, please?", "Could I have a glass of water, please?", "May I have a glass of water, please?"]),
      ex("window-seat", "窓側の席にしていただけますか？", "Can I have a window seat, please?", "空港", "希望を穏やかに伝える", ["Can I have a window seat, please?", "Could I have a window seat, please?", "May I have a window seat, please?"]),
      ex("room-key", "部屋の鍵をいただけますか？", "Can I have the room key, please?", "ホテル", "必要な物を頼む表現", ["Can I have the room key, please?", "Could I have the room key, please?", "May I have the room key, please?", "Can I have my room key, please?", "Could I have my room key, please?"]),
      ex("extra-towel", "タオルをもう1枚いただけますか？", "Can I have an extra towel, please?", "ホテル", "追加を気軽に頼む", ["Can I have an extra towel, please?", "Could I have an extra towel, please?", "May I have an extra towel, please?", "Can I have another towel, please?", "Could I have another towel, please?"]),
      ex("menu", "メニューをいただけますか？", "Can I have the menu, please?", "レストラン", "店員さんへの自然な頼み方", ["Can I have the menu, please?", "Could I have the menu, please?", "May I have the menu, please?", "Can I have a menu, please?", "Could I have a menu, please?"]),
      ex("fried-rice", "ナシゴレンをいただけますか？", "Can I have the nasi goreng, please?", "レストラン", "料理を注文する定番表現", ["Can I have the nasi goreng, please?", "Could I have the nasi goreng, please?", "May I have the nasi goreng, please?", "Can I have nasi goreng, please?", "Could I have nasi goreng, please?"]),
      ex("bill", "お会計をお願いします。", "Can I have the bill, please?", "レストラン", "英国・バリで自然な表現", ["Can I have the bill, please?", "Could I have the bill, please?", "May I have the bill, please?", "Can I have the check, please?", "Could I have the check, please?"]),
      ex("small-size", "小さいサイズをいただけますか？", "Can I have a smaller size, please?", "買い物", "サイズ違いを頼む表現", ["Can I have a smaller size, please?", "Could I have a smaller size, please?", "May I have a smaller size, please?", "Can I have the smaller size, please?", "Could I have the smaller size, please?"]),
      ex("receipt", "レシートをいただけますか？", "Can I have a receipt, please?", "買い物", "会計時の簡単な頼み方", ["Can I have a receipt, please?", "Could I have a receipt, please?", "May I have a receipt, please?", "Can I have the receipt, please?", "Could I have the receipt, please?"])
    ]
  },
  {
    id: "id-like", title: "I’d like ～, please.", description: "「～をお願いします」希望や注文を落ち着いて伝えます。",
    examples: [
      ex("like-aisle-seat", "通路側の席をお願いします。", "I’d like an aisle seat, please.", "空港", "席の希望を伝える", ["I'd like an aisle seat, please.", "I would like an aisle seat, please.", "Can I have an aisle seat, please?", "Could I have an aisle seat, please?"]),
      ex("like-twin-room", "ツインの部屋をお願いします。", "I’d like a room with twin beds, please.", "ホテル", "部屋の希望を伝える", ["I'd like a room with twin beds, please.", "I would like a room with twin beds, please.", "Can I have a room with twin beds, please?", "I'd like a twin room, please."]),
      ex("like-late-checkout", "レイトチェックアウトを希望します。", "I’d like a late check-out, please.", "ホテル", "可能か相談するきっかけ", ["I'd like a late check-out, please.", "I would like a late check-out, please.", "I'd like late checkout, please.", "Can I have a late check-out, please?"]),
      ex("like-table-three", "3人用のテーブルをお願いします。", "I’d like a table for three, please.", "レストラン", "人数を伝えて席を頼む", ["I'd like a table for three, please.", "I would like a table for three, please.", "Can we have a table for three, please?", "A table for three, please."]),
      ex("like-nasi-goreng", "ナシゴレンをお願いします。", "I’d like the nasi goreng, please.", "レストラン", "料理を注文する", ["I'd like the nasi goreng, please.", "I would like the nasi goreng, please.", "I'd like nasi goreng, please.", "Can I have the nasi goreng, please?"]),
      ex("like-iced-tea", "アイスティーをお願いします。", "I’d like an iced tea, please.", "レストラン", "飲み物を注文する", ["I'd like an iced tea, please.", "I would like an iced tea, please.", "Can I have an iced tea, please?", "An iced tea, please."]),
      ex("like-this-one", "これをお願いします。", "I’d like this one, please.", "買い物", "指さしながら使える", ["I'd like this one, please.", "I would like this one, please.", "I'll take this one, please.", "Can I have this one, please?"]),
      ex("like-medium-size", "Mサイズをお願いします。", "I’d like a medium, please.", "買い物", "服のサイズを伝える", ["I'd like a medium, please.", "I would like a medium, please.", "I'd like the medium size, please.", "Can I have a medium, please?"]),
      ex("like-taxi-airport", "空港までタクシーをお願いします。", "I’d like a taxi to the airport, please.", "ホテル・移動", "行き先を添えて頼む", ["I'd like a taxi to the airport, please.", "I would like a taxi to the airport, please.", "Can I have a taxi to the airport, please?", "Could you get me a taxi to the airport, please?"]),
      ex("like-two-tickets", "チケットを2枚お願いします。", "I’d like two tickets, please.", "移動・観光", "枚数を短く伝える", ["I'd like two tickets, please.", "I would like two tickets, please.", "Can I have two tickets, please?", "Two tickets, please."])
    ]
  },
  {
    id: "where-is", title: "Where is ～?", description: "「～はどこですか？」場所を短く尋ねます。",
    examples: [
      ex("where-baggage-claim", "手荷物受取所はどこですか？", "Where is baggage claim?", "空港", "到着後に場所を尋ねる", ["Where is baggage claim?", "Where's baggage claim?", "Where is the baggage claim?", "Could you tell me where baggage claim is?"]),
      ex("where-immigration", "入国審査はどこですか？", "Where is immigration?", "空港", "案内を確認する", ["Where is immigration?", "Where's immigration?", "Where is the immigration area?", "Could you tell me where immigration is?"]),
      ex("where-taxi-stand", "タクシー乗り場はどこですか？", "Where is the taxi stand?", "空港・移動", "乗り場を尋ねる", ["Where is the taxi stand?", "Where's the taxi stand?", "Where is the taxi rank?", "Could you tell me where the taxi stand is?"]),
      ex("where-hotel-shuttle", "ホテルの送迎バス乗り場はどこですか？", "Where is the hotel shuttle stop?", "空港", "送迎の乗り場を確認する", ["Where is the hotel shuttle stop?", "Where's the hotel shuttle stop?", "Where is the hotel shuttle pickup point?", "Could you tell me where the hotel shuttle stop is?"]),
      ex("where-restroom", "お手洗いはどこですか？", "Where is the restroom?", "空港・ホテル", "どこでも使える質問", ["Where is the restroom?", "Where's the restroom?", "Where is the toilet?", "Could you tell me where the restroom is?"]),
      ex("where-reception", "フロントはどこですか？", "Where is reception?", "ホテル", "ホテル内で場所を尋ねる", ["Where is reception?", "Where's reception?", "Where is the front desk?", "Could you tell me where reception is?"]),
      ex("where-breakfast-room", "朝食会場はどこですか？", "Where is the breakfast room?", "ホテル", "館内施設を尋ねる", ["Where is the breakfast room?", "Where's the breakfast room?", "Where is breakfast served?", "Could you tell me where the breakfast room is?"]),
      ex("where-beach-shuttle-stop", "ビーチ行き送迎バスの乗り場はどこですか？", "Where is the beach shuttle stop?", "ホテル", "送迎場所を確認する", ["Where is the beach shuttle stop?", "Where's the beach shuttle stop?", "Where is the beach shuttle pickup point?", "Could you tell me where the beach shuttle stop is?"]),
      ex("where-nearest-atm", "一番近いATMはどこですか？", "Where is the nearest ATM?", "ホテル・街中", "近い場所を尋ねる", ["Where is the nearest ATM?", "Where's the nearest ATM?", "Could you tell me where the nearest ATM is?", "Where can I find the nearest ATM?"]),
      ex("where-beach", "ビーチはどこですか？", "Where is the beach?", "ホテル・街中", "目的地の方向を尋ねる", ["Where is the beach?", "Where's the beach?", "Could you tell me where the beach is?", "Which way is the beach?"])
    ]
  },
  {
    id: "what-time", title: "What time ～?", description: "「何時に～ですか？」予定に合わせた語順で時刻を尋ねます。",
    examples: [
      ex("time-boarding-start", "搭乗は何時に始まりますか？", "What time does boarding start?", "空港", "搭乗開始時刻を尋ねる", ["What time does boarding start?", "When does boarding start?", "What time do we start boarding?", "When do we start boarding?"]),
      ex("time-flight-leave", "飛行機は何時に出発しますか？", "What time does the flight leave?", "空港", "出発時刻を確認する", ["What time does the flight leave?", "When does the flight leave?", "What time does the flight depart?", "When does the flight depart?"]),
      ex("time-breakfast-start", "朝食は何時に始まりますか？", "What time does breakfast start?", "ホテル", "朝食開始を尋ねる", ["What time does breakfast start?", "When does breakfast start?", "What time is breakfast served?", "When is breakfast served?"]),
      ex("time-breakfast-end", "朝食は何時に終わりますか？", "What time does breakfast end?", "ホテル", "朝食終了を尋ねる", ["What time does breakfast end?", "When does breakfast end?", "What time does breakfast finish?", "When does breakfast finish?"]),
      ex("time-checkout", "チェックアウトは何時ですか？", "What time is check-out?", "ホテル", "基本の時刻確認", ["What time is check-out?", "What time is checkout?", "When is check-out?", "What is the check-out time?"]),
      ex("time-beach-shuttle-leave", "ビーチ行きの送迎バスは何時に出ますか？", "What time does the beach shuttle leave?", "ホテル", "送迎時刻を確認する", ["What time does the beach shuttle leave?", "When does the beach shuttle leave?", "What time does the shuttle to the beach leave?", "When does the shuttle to the beach leave?"]),
      ex("time-last-shuttle-return", "最終の送迎バスは何時に戻りますか？", "What time does the last shuttle return?", "ホテル", "最終便の時刻を尋ねる", ["What time does the last shuttle return?", "When does the last shuttle return?", "What time does the last shuttle come back?", "When does the last shuttle come back?"]),
      ex("time-pool-close", "プールは何時に閉まりますか？", "What time does the pool close?", "ホテル", "施設の終了時刻を尋ねる", ["What time does the pool close?", "When does the pool close?", "What time is the pool open until?", "How late is the pool open?"]),
      ex("time-restaurant-open", "レストランは何時に開きますか？", "What time does the restaurant open?", "ホテル・レストラン", "営業開始を尋ねる", ["What time does the restaurant open?", "When does the restaurant open?", "What time is the restaurant open?", "When is the restaurant open?"]),
      ex("time-taxi-arrive", "タクシーは何時に来ますか？", "What time will the taxi arrive?", "ホテル・移動", "手配した車の時刻確認", ["What time will the taxi arrive?", "When will the taxi arrive?", "What time is the taxi coming?", "When is the taxi coming?"])
    ]
  },
  {
    id: "do-you-have", title: "Do you have ～?", description: "「～はありますか？」物やサービスの有無を尋ねます。",
    examples: [
      ex("have-twin-rooms", "ツインの部屋はありますか？", "Do you have rooms with twin beds?", "ホテル", "部屋タイプの有無を尋ねる", ["Do you have rooms with twin beds?", "Do you have a room with twin beds?", "Do you have any twin rooms?", "Have you got any twin rooms?"]),
      ex("have-airport-shuttle", "空港送迎はありますか？", "Do you have an airport shuttle?", "ホテル", "送迎サービスの有無を尋ねる", ["Do you have an airport shuttle?", "Do you have an airport shuttle service?", "Is there an airport shuttle?", "Do you offer an airport shuttle?"]),
      ex("have-beach-shuttle", "ビーチへの送迎バスはありますか？", "Do you have a shuttle to the beach?", "ホテル", "ビーチ送迎の有無を尋ねる", ["Do you have a shuttle to the beach?", "Do you have a beach shuttle?", "Is there a shuttle to the beach?", "Do you offer a shuttle to the beach?"]),
      ex("have-luggage-storage", "荷物預かりはありますか？", "Do you have luggage storage?", "ホテル", "チェックアウト前後に尋ねる", ["Do you have luggage storage?", "Do you have a luggage storage service?", "Is there luggage storage?", "Can you store our luggage?"]),
      ex("have-late-checkout", "レイトチェックアウトはありますか？", "Do you have a late check-out option?", "ホテル", "可能性を確認する", ["Do you have a late check-out option?", "Do you have a late checkout option?", "Do you offer late check-out?", "Is late check-out available?", "Can we check out late?"]),
      ex("have-vegetarian-food", "ベジタリアン料理はありますか？", "Do you have vegetarian food?", "レストラン", "食事の選択肢を尋ねる", ["Do you have vegetarian food?", "Do you have vegetarian dishes?", "Do you have any vegetarian options?", "Are there any vegetarian options?"]),
      ex("have-smaller-size", "もっと小さいサイズはありますか？", "Do you have a smaller size?", "買い物", "サイズ違いを尋ねる", ["Do you have a smaller size?", "Do you have this in a smaller size?", "Have you got a smaller size?", "Is there a smaller size?"]),
      ex("have-blue", "これは青色もありますか？", "Do you have this in blue?", "買い物", "色違いを尋ねる", ["Do you have this in blue?", "Have you got this in blue?", "Does this come in blue?", "Is this available in blue?"]),
      ex("have-wifi", "Wi-Fiはありますか？", "Do you have Wi-Fi?", "ホテル・レストラン", "接続サービスを尋ねる", ["Do you have Wi-Fi?", "Is there Wi-Fi?", "Do you have wireless internet?", "Is Wi-Fi available?"]),
      ex("have-change", "これをくずせますか？", "Do you have change for this?", "買い物・移動", "小銭が必要なときに使う", ["Do you have change for this?", "Have you got change for this?", "Can you change this?", "Could you change this for me?"])
    ]
  },
  {
    id: "can-i", title: "Can I ～?", description: "「～してもいいですか？」自分がすることの許可を尋ねます。",
    examples: [
      ex("can-leave-luggage", "ここに荷物を預けてもいいですか？", "Can I leave my luggage here?", "ホテル", "荷物を置く許可を尋ねる", ["Can I leave my luggage here?", "May I leave my luggage here?", "Is it okay if I leave my luggage here?", "Can we leave our luggage here?"]),
      ex("can-check-in-early", "早めにチェックインできますか？", "Can I check in early?", "ホテル", "早い到着時に相談する", ["Can I check in early?", "May I check in early?", "Is it possible to check in early?", "Can we check in early?"]),
      ex("can-use-pool-after", "チェックアウト後もプールを使えますか？", "Can I use the pool after check-out?", "ホテル", "滞在後の施設利用を尋ねる", ["Can I use the pool after check-out?", "Can I use the pool after checkout?", "May I use the pool after check-out?", "Can we use the pool after check-out?", "Is it okay to use the pool after check-out?"]),
      ex("can-use-shower-after", "チェックアウト後もシャワーを使えますか？", "Can I use the shower after check-out?", "ホテル", "滞在後の設備利用を尋ねる", ["Can I use the shower after check-out?", "Can I use the shower after checkout?", "May I use the shower after check-out?", "Can we use the shower after check-out?", "Is it okay to use the shower after check-out?"]),
      ex("can-pay-card", "カードで払えますか？", "Can I pay by card?", "ホテル・買い物", "支払い方法を確認する", ["Can I pay by card?", "May I pay by card?", "Can I pay with a card?", "Do you take cards?"]),
      ex("can-sit-here", "ここに座ってもいいですか？", "Can I sit here?", "空港・レストラン", "席の利用を尋ねる", ["Can I sit here?", "May I sit here?", "Is it okay if I sit here?", "Can we sit here?"]),
      ex("can-try-on", "これを試着してもいいですか？", "Can I try this on?", "買い物", "試着の許可を尋ねる", ["Can I try this on?", "May I try this on?", "Can I try it on?", "Is it okay if I try this on?"]),
      ex("can-take-photo", "写真を撮ってもいいですか？", "Can I take a photo?", "ホテル・観光", "撮影の許可を尋ねる", ["Can I take a photo?", "May I take a photo?", "Can I take pictures?", "Is it okay to take a photo?"]),
      ex("can-charge-phone", "ここで携帯を充電してもいいですか？", "Can I charge my phone here?", "空港・ホテル", "充電の許可を尋ねる", ["Can I charge my phone here?", "May I charge my phone here?", "Is it okay if I charge my phone here?", "Can we charge our phones here?"]),
      ex("can-take-shuttle", "この送迎バスでビーチへ行けますか？", "Can I take this shuttle to the beach?", "ホテル・移動", "利用できるか確認する", ["Can I take this shuttle to the beach?", "Can we take this shuttle to the beach?", "Does this shuttle go to the beach?", "Is this the shuttle to the beach?"])
    ]
  },
  {
    id: "can-you", title: "Can you ～, please?", description: "「～してもらえますか？」相手に短く依頼します。",
    examples: [
      ex("can-you-speak-slowly", "ゆっくり話してもらえますか？", "Can you speak slowly, please?", "旅行中全般", "聞き取りやすくしてもらう", ["Can you speak slowly, please?", "Could you speak slowly, please?", "Can you speak more slowly, please?", "Please speak slowly."]),
      ex("can-you-say-again", "もう一度言ってもらえますか？", "Can you say that again, please?", "旅行中全般", "聞き返す基本表現", ["Can you say that again, please?", "Could you say that again, please?", "Can you repeat that, please?", "Could you repeat that, please?"]),
      ex("can-you-help-bags", "荷物を手伝ってもらえますか？", "Can you help me with my bags, please?", "空港・ホテル", "荷物の手助けを頼む", ["Can you help me with my bags, please?", "Could you help me with my bags, please?", "Can you help us with our bags, please?", "Could you help with these bags, please?"]),
      ex("can-you-call-taxi", "タクシーを呼んでもらえますか？", "Can you call a taxi, please?", "ホテル・レストラン", "移動手段を頼む", ["Can you call a taxi, please?", "Could you call a taxi, please?", "Can you get me a taxi, please?", "Could you get us a taxi, please?"]),
      ex("can-you-show-map", "地図で示してもらえますか？", "Can you show me on the map, please?", "ホテル・街中", "場所を視覚的に確認する", ["Can you show me on the map, please?", "Could you show me on the map, please?", "Can you point it out on the map, please?", "Could you mark it on the map, please?"]),
      ex("can-you-photo-us", "私たちの写真を撮ってもらえますか？", "Can you take a photo of us, please?", "観光", "3人の写真を頼む", ["Can you take a photo of us, please?", "Could you take a photo of us, please?", "Can you take our picture, please?", "Could you take our picture, please?"]),
      ex("can-you-bring-towel", "タオルをもう1枚持ってきてもらえますか？", "Can you bring another towel, please?", "ホテル", "追加の備品を頼む", ["Can you bring another towel, please?", "Could you bring another towel, please?", "Can you bring an extra towel, please?", "Could you bring us another towel, please?"]),
      ex("can-you-check-booking", "予約を確認してもらえますか？", "Can you check my booking, please?", "空港・ホテル", "予約内容の確認を頼む", ["Can you check my booking, please?", "Could you check my booking, please?", "Can you check our reservation, please?", "Could you check the booking, please?"]),
      ex("can-you-write-down", "書いてもらえますか？", "Can you write it down, please?", "旅行中全般", "聞き取りにくい内容を確認する", ["Can you write it down, please?", "Could you write it down, please?", "Can you write that down, please?", "Could you write that for me, please?"]),
      ex("can-you-shuttle-stop", "送迎バスの乗り場を教えてもらえますか？", "Can you show me where the shuttle stops, please?", "ホテル", "乗り場の案内を頼む", ["Can you show me where the shuttle stops, please?", "Could you show me where the shuttle stops, please?", "Can you tell me where the shuttle stops, please?", "Could you tell me where the shuttle stop is, please?"])
    ]
  },
  {
    id: "do-i-need", title: "Do I need ～?", description: "「～する必要がありますか？」必要な手続きや持ち物を確認します。",
    examples: [
      ex("need-fill-form", "この用紙に記入する必要がありますか？", "Do I need to fill out this form?", "空港・ホテル", "手続きの必要性を尋ねる", ["Do I need to fill out this form?", "Do I need to complete this form?", "Should I fill out this form?", "Do we need to fill out this form?"]),
      ex("need-show-passport", "パスポートを見せる必要がありますか？", "Do I need to show my passport?", "空港・ホテル", "本人確認の必要性を尋ねる", ["Do I need to show my passport?", "Should I show my passport?", "Do you need to see my passport?", "Do we need to show our passports?"]),
      ex("need-visa", "ビザが必要ですか？", "Do I need a visa?", "空港・旅行準備", "必要書類を確認する質問", ["Do I need a visa?", "Will I need a visa?", "Is a visa required?", "Do we need visas?"]),
      ex("need-pay-now", "今、支払う必要がありますか？", "Do I need to pay now?", "ホテル・レストラン", "支払い時期を確認する", ["Do I need to pay now?", "Should I pay now?", "Do we need to pay now?", "Is payment needed now?"]),
      ex("need-book-shuttle", "ビーチ行き送迎バスは予約が必要ですか？", "Do I need to book the beach shuttle?", "ホテル", "送迎の予約要否を尋ねる", ["Do I need to book the beach shuttle?", "Should I book the beach shuttle?", "Do we need to book the beach shuttle?", "Is a booking needed for the beach shuttle?"]),
      ex("need-reserve-table", "テーブルを予約する必要がありますか？", "Do I need to reserve a table?", "ホテル・レストラン", "予約の要否を尋ねる", ["Do I need to reserve a table?", "Should I reserve a table?", "Do we need to book a table?", "Is a reservation needed?"]),
      ex("need-keep-receipt", "このレシートを取っておく必要がありますか？", "Do I need to keep this receipt?", "買い物・空港", "書類を保管するか尋ねる", ["Do I need to keep this receipt?", "Should I keep this receipt?", "Do we need to keep this receipt?", "Is this receipt needed later?"]),
      ex("need-remove-shoes", "靴を脱ぐ必要がありますか？", "Do I need to take off my shoes?", "ホテル・施設", "現地の決まりを確認する", ["Do I need to take off my shoes?", "Should I take off my shoes?", "Do we need to take off our shoes?", "Is it okay to keep my shoes on?"]),
      ex("need-bring-towel", "タオルを持っていく必要がありますか？", "Do I need to bring a towel?", "ホテル", "施設利用の持ち物を尋ねる", ["Do I need to bring a towel?", "Should I bring a towel?", "Do we need to bring towels?", "Are towels provided?"]),
      ex("need-check-in-online", "オンラインでチェックインする必要がありますか？", "Do I need to check in online?", "空港・旅行準備", "搭乗手続きを確認する", ["Do I need to check in online?", "Should I check in online?", "Do we need to check in online?", "Is online check-in required?"])
    ]
  },
  {
    id: "is-this", title: "Is this ～?", description: "「これは～ですか？」目の前の物や場所を確認します。",
    examples: [
      ex("is-line-immigration", "これは入国審査の列ですか？", "Is this the line for immigration?", "空港", "並ぶ場所を確認する", ["Is this the line for immigration?", "Is this the immigration line?", "Is this the queue for immigration?", "Is this where we line up for immigration?"]),
      ex("is-gate-five", "ここは5番ゲートですか？", "Is this gate five?", "空港", "搭乗口を確認する", ["Is this gate five?", "Is this gate number five?", "Are we at gate five?", "Is this gate 5?"]),
      ex("is-hotel-shuttle", "これはホテル行きの送迎バスですか？", "Is this the shuttle to the hotel?", "空港・移動", "乗る車を確認する", ["Is this the shuttle to the hotel?", "Is this the hotel shuttle?", "Does this shuttle go to the hotel?", "Is this our hotel shuttle?"]),
      ex("is-price-three", "これは3人分の料金ですか？", "Is this the price for three people?", "移動・レストラン", "料金の範囲を確認する", ["Is this the price for three people?", "Is this price for three people?", "Is this the total for three people?", "Does this price include three people?"]),
      ex("is-room-key", "これは部屋の鍵ですか？", "Is this the room key?", "ホテル", "渡された物を確認する", ["Is this the room key?", "Is this my room key?", "Is this our room key?", "Is this the key for the room?"]),
      ex("is-included", "これは料金に含まれていますか？", "Is this included in the price?", "ホテル・レストラン", "追加料金の有無を確認する", ["Is this included in the price?", "Is this included?", "Does the price include this?", "Is this part of the price?"]),
      ex("is-spicy", "これは辛いですか？", "Is this spicy?", "レストラン", "料理の辛さを確認する", ["Is this spicy?", "Is this very spicy?", "Is it spicy?", "Does this have chili in it?"]),
      ex("is-vegetarian", "これはベジタリアン料理ですか？", "Is this vegetarian?", "レストラン", "料理の内容を確認する", ["Is this vegetarian?", "Is this a vegetarian dish?", "Is it vegetarian?", "Does this have meat in it?"]),
      ex("is-right-size", "これは正しいサイズですか？", "Is this the right size?", "買い物", "商品サイズを確認する", ["Is this the right size?", "Is this my size?", "Is this the correct size?", "Is this a medium?"]),
      ex("is-way-beach", "こちらがビーチへの道ですか？", "Is this the way to the beach?", "ホテル・街中", "方向を確認する", ["Is this the way to the beach?", "Is this the right way to the beach?", "Does this road go to the beach?", "Am I going the right way to the beach?"])
    ]
  },
  {
    id: "not-working", title: "～ isn’t working.", description: "「～が動きません」旅行中の不具合を簡潔に伝えます。",
    examples: [
      ex("broken-air-conditioner", "エアコンが動きません。", "The air conditioner isn’t working.", "ホテル", "部屋の不具合を伝える", ["The air conditioner isn't working.", "The air conditioner is not working.", "The air conditioning isn't working.", "The AC isn't working."]),
      ex("broken-shower", "シャワーが使えません。", "The shower isn’t working.", "ホテル", "水回りの不具合を伝える", ["The shower isn't working.", "The shower is not working.", "The shower doesn't work.", "There is a problem with the shower."]),
      ex("broken-hot-water", "お湯が出ません。", "The hot water isn’t working.", "ホテル", "お湯の不具合を伝える", ["The hot water isn't working.", "The hot water is not working.", "There is no hot water.", "I can't get any hot water."]),
      ex("broken-room-key", "部屋の鍵が使えません。", "The room key isn’t working.", "ホテル", "入室できないことを伝える", ["The room key isn't working.", "The room key is not working.", "My room key doesn't work.", "The key card isn't working."]),
      ex("broken-wifi", "Wi-Fiがつながりません。", "The Wi-Fi isn’t working.", "ホテル", "接続の不具合を伝える", ["The Wi-Fi isn't working.", "The Wi-Fi is not working.", "The Wi-Fi doesn't work.", "I can't connect to the Wi-Fi."]),
      ex("broken-tv", "テレビが動きません。", "The TV isn’t working.", "ホテル", "客室設備の不具合を伝える", ["The TV isn't working.", "The TV is not working.", "The television doesn't work.", "I can't turn on the TV."]),
      ex("broken-light", "照明がつきません。", "The light isn’t working.", "ホテル", "照明の不具合を伝える", ["The light isn't working.", "The light is not working.", "The light doesn't work.", "I can't turn on the light."]),
      ex("broken-safe", "金庫が動きません。", "The safe isn’t working.", "ホテル", "客室金庫の不具合を伝える", ["The safe isn't working.", "The safe is not working.", "The safe doesn't work.", "I can't open the safe."]),
      ex("broken-toilet", "トイレが流れません。", "The toilet isn’t working.", "ホテル", "トイレの不具合を伝える", ["The toilet isn't working.", "The toilet is not working.", "The toilet doesn't flush.", "I can't flush the toilet."]),
      ex("broken-outlet", "コンセントが使えません。", "The power outlet isn’t working.", "ホテル・空港", "充電できないことを伝える", ["The power outlet isn't working.", "The power outlet is not working.", "The outlet doesn't work.", "The socket isn't working."])
    ]
  }
];

export const lessons = patterns.flatMap((pattern, patternIndex) => pattern.examples.map((lesson) => ({
  ...lesson,
  patternId: pattern.id,
  patternTitle: pattern.title,
  patternNumber: patternIndex + 1
})));

export const lessonIds = lessons.map((lesson) => lesson.id);
export function getPattern(patternId) { return patterns.find((pattern) => pattern.id === patternId) || patterns[0]; }
