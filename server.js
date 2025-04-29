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

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  users.set(socket.id, { id: socket.id.substring(0, 5) });
  io.emit("user list", Array.from(users.values()));

  socket.on("chat message", (msg) => {
    console.log("Message: " + msg);

    io.emit("chat message", {
      id: socket.id.substring(0, 5),
      text: msg,
    });
  });

  io.emit("system message", `${socket.id.substring(0, 5)} joined the chat.`);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    users.delete(socket.id);
    io.emit("system message", `${socket.id.substring(0, 5)} left the chat.`);
    io.emit("user list", Array.from(users.values()));
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:#{PORT}`);
});
