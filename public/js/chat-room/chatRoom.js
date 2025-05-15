const socket = io();

const profile = JSON.parse(sessionStorage.getItem("userProfile"));
if (!profile) {
  alert("Profile not found. Redirecting...");
  window.location.href = "/";
}

// const chat = JSON.parse(sessionStorage.getItem("chatInfo"));
const chatId = window.location.pathname.split("/").pop();

if (!chat) {
  alert("Chat not found. Redirecting...");
  window.location.href = "/";
}

const { username, avatar } = profile;

socket.emit("createRoom", {
  chatId,
  username,
  avatar,
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("input");
  const message = input.value.trim();

  if (message) {
    socket.emit("chat message", message);
    input.value = "";
  }
});

socket.on("chat message", (data) => {
  const messages = document.getElementById("messages");
  
  const item = document.createElement("li");
  item.classList.add("message-item");

  const userMsg = document.createElement("div");
  userMsg.style.display = "flex";
  userMsg.style.width = "100%";

  const userMsgWrapper = document.createElement("div");
  userMsgWrapper.classList.add("message-wrapper");

  const userMsgStamp = document.createElement("span");
  userMsgStamp.classList.add("message-stamp");
  userMsgStamp.appendChild(document.createTextNode(profile.username));

  const userMsgText = document.createElement("div");
  userMsgText.classList.add("message-text");
  userMsgText.appendChild(document.createTextNode(data.text));

  const userAvatar = document.createElement("img");
  userAvatar.src = profile.avatar;
  userAvatar.classList.add("avatar");

  const isUser = data.id === socket.id.substring(0, 5);
  if (isUser) {
    userMsg.style.justifyContent = "flex-end";
    userMsgText.classList.add("message-outgoing");
  } else {
    userMsg.style.justifyContent = "flex-start";
    item.style.flexDirection = "row-reverse";
    userMsgWrapper.style.alignItems = "start";
    userMsgText.classList.add("message-incoming");
  }

  userMsgWrapper.appendChild(userMsgStamp);
  userMsgWrapper.appendChild(userMsgText);
  userMsg.appendChild(userMsgWrapper);
  item.appendChild(userMsg);
  item.appendChild(userAvatar);

  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

socket.on("system message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  item.style.fontStyle = "italic";
  item.style.color = "gray";
  document.getElementById("messages").appendChild(item);
});

socket.on("user list", (userList) => {
  const menu = document.getElementById("user-list");
  menu.innerHTML = "";

  userList.forEach((user) => {
    const userItem = document.createElement("div");
    const userAvatar = document.createElement("img");
    userAvatar.src = user.avatar;
    userAvatar.classList.add("avatar");

    userItem.appendChild(userAvatar);
    userItem.appendChild(document.createTextNode(`${user.username}`));
    userItem.className = "user-item";
    menu.appendChild(userItem);
  });
});
