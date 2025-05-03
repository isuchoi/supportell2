const chatbox = document.getElementById("chatbox");

function appendMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-msg" : "bot-msg";
  msg.innerText = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}
  /*
  function getBotReply(text) {
  text = text.toLowerCase();

  if (text.includes("hi") || text.includes("hello")) {
    return "Heeey cutie~! ☀️ I'm Summer and I'm SO glad you're here!";
  }
  if (text.includes("sad")) {
    return "Nooo! Don't be sad 😢 Let's dance in the sun together!";
  }
  if (text.includes("idea") || text.includes("what should I do")) {
    return "Try something FUN today! Like drawing a bunny or eating a lemon tart! 🍋🐰";
  }

  return "Hmm... I didn't get that, but I still think you're adorable 💕";
}
*/

async function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  try {
    const response = await fetch("https://bots.botpress.cloud/v1/chat/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_TOKEN_HERE" // 여기에 복사한 토큰 넣기!
      },
      body: JSON.stringify({
        botId: "애기 봇 ID (예: supportell-summer)",
        userId: "user_" + Math.random().toString(36).substring(7), // 고유 ID 생성
        type: "text",
        payload: message
      })
    });

    const data = await response.json();
    const botReply = data.responses[0]?.payload?.text || "응답이 없어요!";
    appendMessage("bot", botReply);

  } catch (err) {
    console.error(err);
    appendMessage("bot", "오류가 발생했어요!");
  }
}
