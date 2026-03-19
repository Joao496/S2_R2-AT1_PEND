const button = document.getElementById("btn");
const nome = document.getElementById("nome");
const message = document.getElementById("msg");

button.addEventListener("click", function () {
  message.innerHTML = "Olá " + nome.value;
});