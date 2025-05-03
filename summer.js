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
}
