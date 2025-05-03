const chatbox = document.getElementById("chatbox");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-msg" : "bot-msg";
  msg.innerText = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

async function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  const webhookId = "60367599-a0f5-4a89-996a-fb9e8e0914a4";

  try {
    const createUserRes = await fetch(`https://chat.botpress.cloud/${webhookId}/users`, {
      method: "POST",
    });
    const userData = await createUserRes.json();
    const userId = userData.id;
    const userKey = userData.userKey;

    const createConvRes = await fetch(`https://chat.botpress.cloud/${webhookId}/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-user-key": userKey
      },
      body: JSON.stringify({ userId })
    });
    const convData = await createConvRes.json();
    const conversationId = convData.id;

    const sendMsgRes = await fetch(`https://chat.botpress.cloud/${webhookId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-user-key": userKey
      },
      body: JSON.stringify({
        conversationId,
        type: "text",
        payload: message
      })
    });

    const msgData = await sendMsgRes.json();
    console.log("Response from bot:", msgData);

    const firstResponse = msgData.responses?.[0];
    if (!firstResponse) {
      appendMessage("bot", "응답이 도착하지 않았어요! 🥺");
      return;
    }

    const botReply = firstResponse.payload?.text || "봇이 아직 대답을 준비 못 했어요!";
    appendMessage("bot", botReply);

  } catch (err) {
    console.error(err);
    appendMessage("bot", "오류가 발생했어요! 😭");
  }
}
