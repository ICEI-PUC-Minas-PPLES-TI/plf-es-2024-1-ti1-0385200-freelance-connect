window.addEventListener("DOMContentLoaded", () => {
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");

  const data = JSON.parse(sessionStorage.getItem("user"));

  userName.innerText = data.name;
  userEmail.innerText = data.email;

  /*   loadVagas();
  loadVagasCandidatas(data.id); */
});

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", () => {
  logoutUser();
});

const vagasContainer = document.querySelector("#vagas");
const vagasCandidatadas = document.querySelector("#vagasCandidatadas");

async function loadVagas() {
  const data = await fetch("https://connect-tech-back.onrender.com/vagas").then(
    (response) => response.json()
  );

  vagasContainer.innerHTML = "";

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

    const button = document.createElement("button");
    button.className =
      "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
    button.textContent = "Candidatar";

    const userRole = JSON.parse(sessionStorage.getItem("user")).type;
    if (userRole === "freelancer") {
      textContainer.appendChild(button);
    }

    vagasContainer.appendChild(card);
  });
}

const tituloItem = document.getElementById("vagas-title-cont");

const userRole = JSON.parse(sessionStorage.getItem("user")).type;
if (userRole === "freelancer") {
  tituloItem.textContent = "Vagas Candidatadas";
} else {
  tituloItem.textContent = "Minhas Vagas Cadastradas";
}

async function loadVagasCandidatas(id) {
  const data = await fetch("https://connect-tech-back.onrender.com/vagas").then(
    (response) => response.json()
  );

  vagasCandidatadas.innerHTML = "";

  data.forEach((oportunidade) => {
    const card = document.createElement("article");
    card.className = "border p-5 rounded-lg flex items-start gap-10";

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

    const button = document.createElement("button");
    button.className =
      "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
    button.textContent = "Cancelar candidatura";
    textContainer.appendChild(button);

    // const userRole = JSON.parse(sessionStorage.getItem("user")).type;
    // if (userRole === "freelancer") {
    //   textContainer.appendChild(button);
    // }

    vagasCandidatadas.appendChild(card);
  });
}
