const btn = document.getElementById("btn");
const item = document.getElementById("item");
const lista = document.getElementById("lista");

btn.addEventListener("click", function () {

  const texto = item.value;

  const li = document.createElement("li");
  li.innerHTML = texto;

  lista.appendChild(li);

  item.value = "";
});