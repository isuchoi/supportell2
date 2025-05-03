const chatbox = document.getElementById("chatbox");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender;
  msg.textContent = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (text === "") return;
  appendMessage("user", text);
  input.value = "";

  const botReply = getBotReply(text);
  setTimeout(() => appendMessage("bot", botReply), 500);
}

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
