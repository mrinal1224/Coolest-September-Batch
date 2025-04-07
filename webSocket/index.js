const express = require("express");
const { createServer } = require("node:http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);

const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.send("./public/index.html");
});

// Socket.io

io.on("connection", (socket) => {
  console.log("New User Connected", socket.id);
});

server.listen(9001, () => {
  console.log("server running at http://localhost:9001");
});
