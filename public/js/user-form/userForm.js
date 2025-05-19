import { initAvatars, getSelectedAvatar } from "./avatars.js";
import { initChatToggle, getChatMode } from "./chatToggle.js";
import { initForm } from "./formHandler.js";

let roomId = sessionStorage.getItem("pendingChatId");
sessionStorage.removeItem("pendingChatId");

if (roomId) {
  const note = document.createElement("p");
  note.textContent = `You're joining room "${roomId}". Just create your profile and you'll be redirected!`;
  note.classList.add("text-sm", "text-gray-400", "mb-2");
  document.querySelector("#profile-form").prepend(note);

  const roomInput = document.createElement("input");
  roomInput.type = "hidden";
  roomInput.name = "room";
  roomInput.value = roomId;
  document.querySelector("#profile-form").appendChild(roomInput);

  document.getElementById("toggle-chat-mode").style.display = "none";
  document.getElementById("new-chat-field").style.display = "none";
  document.getElementById("join-chat-field").style.display = "none";

  // Force mode to "join"
  window._forcedJoinMode = true;
}

initAvatars("avatar-grid-wrapper", "current-avatar-img");

if (!window._forcedJoinMode) {
  initChatToggle();
}

initForm("profile-form", () => window._forcedJoinMode ? "join" : getChatMode(), getSelectedAvatar());
