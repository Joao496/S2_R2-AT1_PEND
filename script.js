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

  // texto da tarefa
  li.innerHTML = texto;

  // criar botão remover
  const botao = document.createElement("button");
  botao.innerHTML = "Remover";
  botao.className = "btn btn-danger btn-sm float-end";

  // evento do botão remover
  botao.addEventListener("click", function () {
    li.remove();
  });

  // colocar botão dentro do li
  li.appendChild(botao);

  // adicionar na lista
  lista.appendChild(li);

  // mensagem sucesso
  msg.innerHTML = "Tarefa adicionada!";
  msg.className = "text-success fw-bold";

  // limpar input
  input.value = "";
});