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
function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message); // 사용자 메시지 추가
  userInput.value = "";

  fetch("https://supportell2.vercel.app/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })
    .then(response => response.json())
    .then(data => {
      appendMessage("bot", data.reply); // GPT의 응답 표시
    })
    .catch(error => {
      console.error("Error:", error);
      appendMessage("bot", "Oops! Something went wrong.");
    });
    */

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

}
