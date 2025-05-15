import { initAvatars, getSelectedAvatar } from "./avatars.js";
import { initChatToggle, getChatMode } from "./chatToggle.js";
import { initForm } from "./formHandler.js";

initAvatars("avatar-grid-wrapper", "current-avatar-img");

initChatToggle();

initForm("profile-form", getChatMode, getSelectedAvatar());
