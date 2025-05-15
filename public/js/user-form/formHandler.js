export function initForm(formId, getMode, getAvatar) {
  document.getElementById(formId).addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.querySelector("#username").value.trim();
    const chatName = form.querySelector("#chat-name")?.value?.trim();
    const chatId = form.querySelector("#chat-id")?.value?.trim();
    const mode = getMode();

    if (!username || username.length > 24 || /[^a-zA-Z0-9]/.test(username)) {
      alert("Enter a valid username (letters/numbers only, max 24 chars)");
      return;
    }

    if (mode === "new" && (!chatName || chatName.length < 2)) {
      alert("Enter a valid chat name.");
      return;
    }

    if (mode === "join" && (!chatId || chatId.length < 4)) {
      alert("Enter a valid chat ID.");
      return;
    }

    const chat = {
      mode,
      chatName: chatName || "Untitled Chat Room",
      chatId: mode === "new" ? crypto.randomUUID().slice(0, 12) : chatId,
    };

    const profile = {
      username,
      avatar: getAvatar,
      chatId: chat.chatId,
    };

    sessionStorage.setItem("chatInfo", JSON.stringify(chat));
    sessionStorage.setItem("userProfile", JSON.stringify(profile));

    window.location.href = `/chat/${profile.chatId}`;
  });
}
