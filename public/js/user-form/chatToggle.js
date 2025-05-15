let mode = "new";

export function initChatToggle() {
  const toggleChatText = document.getElementById("toggle-chat-mode");
  const newChatField = document.getElementById("new-chat-field");
  const joinChatField = document.getElementById("join-chat-field");

  if (!toggleChatText || !newChatField || !joinChatField) return;

  newChatField.classList.remove("hidden");
  joinChatField.classList.add("hidden");

  toggleChatText.addEventListener("click", () => {
    mode = mode === "new" ? "join" : "new";
    const isNewChat = mode === "new";

    newChatField.classList.toggle("hidden", !isNewChat);
    joinChatField.classList.toggle("hidden", isNewChat);

    toggleChatText.innerHTML = isNewChat
      ? 'Already have a chat?'
      : 'Need a new chat?';
  });
}

export function getChatMode() {
  return mode;
}
