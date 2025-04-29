var socket = io();
var form = document.getElementById("form");
var input = document.getElementById("input");
var user_id = null;

// set up unique user
socket.on("connect", function () {
  user_id = socket.id;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (data) {
  var item = document.createElement("li");
  var strong = document.createElement("strong");

  strong.textContent = data.id;
  item.appendChild(strong);

  item.style.display = "flex";

  var user_message = document.createElement("div");
  user_message.style.padding = "8px 12px";
  user_message.style.borderRadius = "15px";
  user_message.style.maxWidth = "60%";
  user_message.style.wordBreak = "break-word";

  if (data.id === user_id.substring(0, 5)) {
    item.style.justifyContent = "flex-end";
    user_message.style.backgroundColor = "#DCF8C6";
  } else {
    item.style.justifyContent = "flex-start";
    user_message.style.backgroundColor = "#D9D9D9";
  }

  user_message.appendChild(strong);
  user_message.appendChild(document.createTextNode(`: ${data.text}`));
  item.appendChild(user_message);

  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

socket.on("system message", function (msg) {
  var item = document.createElement("li");

  item.textContent = msg;
  item.style.fontStyle = "italic";
  item.style.color = "gray";
  messages.appendChild(item);

  messages.scrollTop = messages.scrollHeight;
});

socket.on("user list", function (userList) {
  console.log("Received user list:", userList);

  const menu = document.getElementById("user-list");
  menu.innerHTML = "";

  userList.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.textContent = `User: ${user.id}`;
    userItem.className = "user-item";
    menu.appendChild(userItem);
  });
});
