import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

io.on("connection", (socket) => {
  // console.log("a user connected");
  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

io.emit("some event", {
  someProperty: "some value",
  otherProperty: "other value",
});

// io.on("connection", (socket) => {
//   socket.broadcast.emit("hi");
// });

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on 3000");
});
