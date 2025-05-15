const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3000;

const users = new Map();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/chat/:chatId", (req, res) => {
  res.sendFile(__dirname + "/views/chat-room.html");
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("createRoom", ({ chatId, username, avatar }) => {
    socket.join(chatId);

    users.set(socket.id, {
      id: socket.id.substring(0, 5),
      username,
      avatar,
      chatId,
    });

    socket.to(chatId).emit("system message", `${username} joined the chat.`);

    const chatUsers = Array.from(users.values()).filter(u => u.chatId === chatId);
    io.to(chatId).emit("user list", chatUsers);
  });

  socket.on("chat message", (msg) => {
    const user = users.get(socket.id);
    if (!user) return;

    io.to(user.chatId).emit("chat message", {
      id: user.id,
      avatar: user.avatar,
      username: user.username,
      text: msg,
    });
  });

  socket.on("disconnect", () => {
    const user = users.get(socket.id);
    if (!user) return;

    users.delete(socket.id);
    io.to(user.chatId).emit("system message", `${user.username} left the chat.`);

    const chatUsers = Array.from(users.values()).filter(u => u.chatId === user.chatId);
    io.to(user.chatId).emit("user list", chatUsers);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
