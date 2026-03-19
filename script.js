const btn = document.getElementById("btnAdicionar");
const input = document.getElementById("inputTarefa");
const lista = document.getElementById("listaTarefas");
const msg = document.getElementById("mensagem");

btn.addEventListener("click", function () {


  msg.innerHTML = "";

  const texto = input.value;

  // verificar vazio
  if (texto == "") {
    msg.innerHTML = "Tarefa vazia!";
    msg.className = "text-danger fw-bold";
    return;
  }

  // criar li
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = texto;

  lista.appendChild(li);

  // mensagem sucesso
  msg.innerHTML = "Tarefa adicionada!";
  msg.className = "text-success fw-bold";

  // limpar input
  input.value = "";
});