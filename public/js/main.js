// document.addEventListener("DOMContentLoaded", function () {
//   var socket = io();
//   var form = document.getElementById("form");
//   var input = document.getElementById("input");
//   var messages = document.getElementById("messages");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     socket.emit("chat message", input.value);
//     input.value = "";
//   });

//   socket.on("chat message", function (msg) {
//     const item = document.createElement("li");
//     item.textContent = msg.user + ": " + msg.message;
//     messages.appendChild(item);
//     // window.scrollTo(0, document.body.scrollHeight);
//   });

//   socket.on("user joined", function (username) {
//     const li = document.createElement("li");
//     li.textContent = username + " joined the chat";
//     messages.appendChild(li);
//   });

//   socket.on("user left", function (username) {
//     const li = document.createElement("li");
//     li.textContent = username + " left the chat";
//     messages.appendChild(li);
//   });

//   const username = prompt("Enter your username: ");
//   socket.emit("new user ", username);
// });

const selectElement = document.getElementById("modelSelect");

function selectOption() {
  const selected = selectElement.value;
  console.log(selectElement.value);
  return;
}

selectElement.addEventListener("change", selectOption);
