const caixaBtn = document.getElementById("btn-delete");

const isLogged = localStorage.getItem("logged");

const btnDelete = document.createElement("button");

btnDelete.textContent = "Deletar conta";

console.log(isLogged);

if (isLogged === "true") {
  caixaBtn.appendChild(btnDelete);
}
