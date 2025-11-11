// chat.js
const chatBox = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const message = chatInput.value;
  if (message.trim() === "") return;

  const time = new Date().toLocaleTimeString();
  chatBox.innerHTML += `<p><b>You:</b> ${message} <span>${time}</span></p>`;
  chatInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}