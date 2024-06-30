const container = document.getElementById("ofertas");
const formEdit = document.getElementById("div-edita-vaga");

window.addEventListener("DOMContentLoaded", () => {
  loadVagas();
});

async function deleteVagas(id) {
  const res = await fetch(`${API_URL}/vagas/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());

  if (res) {
    alert("Vaga deletada com sucesso!");
  }
}

async function EditaVaga(id) {
  document.getElementById("idVaga").value = id;
  document.getElementById("nome-vaga-vizualiza").innerText = id;
}

async function handleEditaVaga(ev) {
  ev.preventDefault();
  const id = document.getElementById("idVaga").value;
  console.log(id);
  const vagaTitulo = document.getElementById("vaga-titulo").value || null;
  const vagaDesc = document.getElementById("vaga-desc").value || null;
  const vagaLock = document.getElementById("vaga-lock").value || null;
  const vagaVlrMin = document.getElementById("vaga-min").value || null;
  const vagaVlrMax = document.getElementById("vaga-max").value || null;

  const Body = {};

  if (vagaTitulo) {
    Body.title = vagaTitulo;
  }

  if (vagaDesc) {
    Body.description = vagaDesc;
  }

  if (vagaLock) {
    Body.localization = vagaLock;
  }

  if (vagaVlrMin) {
    Body.valueMin = vagaVlrMin;
  }

  if (vagaVlrMax) {
    Body.valueMax = vagaVlrMax;
  }

  const currentVaga = await fetch(`${API_URL}/vagas/${id}`).then((response) =>
    response.json()
  );

  const updatedVaga = {
    ...currentVaga,
    title: vagaTitulo || currentVaga.title,
    description: vagaDesc || currentVaga.description,
    localization: vagaLock || currentVaga.localization,
    valueMin: vagaVlrMin || currentVaga.valueMin,
    valueMax: vagaVlrMax || currentVaga.valueMax,
  };

  const res = await fetch(`${API_URL}/vagas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedVaga),
  }).then((response) => response.json());

  if (res) {
    alert("Vaga editada com sucesso!");
  }
}

document
  .getElementById("form-edita-vaga")
  .addEventListener("submit", handleEditaVaga);

async function loadVagas() {
  const userID = JSON.parse(sessionStorage.getItem("user")).id;

  const data = await fetch(
    `https://connect-tech-back.onrender.com/vagas/?empresaId=${userID}`
  ).then((response) => response.json());

  if (!data) {
    return (container.innerHTML = "Nenhuma vaga encontrada");
  }

  container.innerHTML = "";

  data.forEach((oportunidade) => {
    const card = document.createElement("article");
    card.className = "border bg-white p-5 rounded-lg flex items-start gap-10";

    const cardImage = document.createElement("img");
    cardImage.className = "h-20 rounded-md";
    cardImage.src = oportunidade.companyLogo;
    card.appendChild(cardImage);

    const textContainer = document.createElement("div");
    textContainer.className = "flex flex-col gap-1";

    card.appendChild(textContainer);

    const cardTitle = document.createElement("h4");
    cardTitle.className = "text-2xl font-semibold";
    cardTitle.textContent = oportunidade.title;
    textContainer.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.className = "text-md text-gray-600 font-medium";
    cardDescription.textContent = oportunidade.description;
    textContainer.appendChild(cardDescription);

    const empresaInfo = document.createElement("p");

    empresaInfo.className = "text-sm text-gray-400";
    empresaInfo.textContent = oportunidade.company;
    textContainer.appendChild(empresaInfo);

    const valuesInfo = document.createElement("p");
    valuesInfo.className = "font-bold text-sm";
    valuesInfo.textContent = `R$${oportunidade.valueMin} - R$${oportunidade.valueMax}`;
    textContainer.appendChild(valuesInfo);

    const divButtons = document.createElement("div");
    divButtons.className = "flex gap-3";
    textContainer.appendChild(divButtons);

    const button = document.createElement("button");
    button.className =
      "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
    button.textContent = "Deletar Vaga";
    button.addEventListener("click", () => deleteVagas(oportunidade.id));

    divButtons.appendChild(button);

    const EditButton = document.createElement("button");
    EditButton.className =
      "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
    EditButton.textContent = "Editar Vaga";
    EditButton.addEventListener("click", () => {
      EditaVaga(oportunidade.id, oportunidade.title);
      formEdit.classList.remove("hidden");
    });
    divButtons.appendChild(EditButton);

    container.appendChild(card);
  });
}
