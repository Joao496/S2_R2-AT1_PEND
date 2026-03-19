const btn = document.getElementById("btn");
const nome = document.getElementById("nome");
const msg = document.getElementById("msg");

btn.onclick = function () {
  msg.innerHTML = "Olá " + nome.value;
};