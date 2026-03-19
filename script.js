const btn = document.getElementById("btnAdicionar");
const input = document.getElementById("inputTarefa");
const lista = document.getElementById("listaTarefas");

btn.addEventListener("click", function () {

  const texto = input.value;

  // não deixa vazio
  if (texto == "") {
    alert("Digite uma tarefa!");
    return;
  }

  // cria li
  const li = document.createElement("li");

  // checkbox
  const check = document.createElement("input");
  check.type = "checkbox";

  // texto
  const span = document.createElement("span");
  span.innerHTML = " " + texto;

  // riscar quando marcar
  check.addEventListener("change", function () {
    if (check.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  // botão remover
  const botao = document.createElement("button");
  botao.innerHTML = " Remover";

  botao.addEventListener("click", function () {
    li.remove();
  });

  // montar tudo
  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(botao);

  lista.appendChild(li);

  input.value = "";
});