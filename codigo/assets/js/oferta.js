const container = document.getElementById("vagas");

window.addEventListener("DOMContentLoaded", () => {
  loadVagas();
});

async function deleteVagas(id) {
  const res = await fetch(`${API_URL}/vagas/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());

  if (res) {
    alert(res);
    loadVagas();
  }
}

async function removerCandidatura(idVaga) {
  const userId = JSON.parse(sessionStorage.getItem("user")).id;

  const getUserVaga = await fetch(
    `https://connect-tech-back.onrender.com/userVaga/?userId=${userId}&vagaId=${idVaga}`
  ).then((response) => response.json());

  const res = await fetch(
    `https://connect-tech-back.onrender.com/userVaga/${getUserVaga[0].id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());

  if (res) {
    alert("Usuario removido da vaga");
    loadVagas(); // Recarregar as vagas para atualizar os botões
  }
}

async function candidatar(vagaId) {
  const userId = JSON.parse(sessionStorage.getItem("user")).id;

  const res = await fetch(`https://connect-tech-back.onrender.com/userVaga`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      vagaId: vagaId,
      status: "pendente",
    }),
  }).then((response) => response.json());

  if (res) {
    alert("Candidatura enviada");
    loadVagas();
  }
}
async function loadVagas() {
  let url = "https://connect-tech-back.onrender.com/vagas";

  const userId = JSON.parse(sessionStorage.getItem("user")).id;

  const [data, companies, userVagas] = await Promise.all([
    fetch(url).then((response) => response.json()),
    fetch("https://connect-tech-back.onrender.com/users").then((response) =>
      response.json()
    ),
    fetch("https://connect-tech-back.onrender.com/userVaga").then((response) =>
      response.json()
    ),
  ]);

  const companyMap = companies.reduce((map, company) => {
    map[company.id] = company;
    return map;
  }, {});

  const userVagaSet = new Set(
    userVagas
      .filter((userVaga) => userVaga.userId === userId)
      .map((userVaga) => userVaga.vagaId)
  );

  const empresaDados = data.map((vaga) => {
    const empresa = companyMap[vaga.empresaId];
    const candidato = userVagaSet.has(vaga.id);

    return {
      ...vaga,
      logo: empresa.logo,
      emailEmpresa: empresa.email,
      candidato: candidato,
    };
  });

  container.innerHTML = "";

  for (const oportunidade of empresaDados) {
    const card = document.createElement("article");
    card.className =
      "border bg-white p-5 rounded-lg flex items-start gap-10 w-full";

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

    const localization = document.createElement("p");
    localization.className = "text-sm text-gray-400";
    localization.textContent = oportunidade.localization;
    textContainer.appendChild(localization);

    const userRole = JSON.parse(sessionStorage.getItem("user")).type;

    if (userRole === "freelancer") {
      if (oportunidade.candidato) {
        const button2 = document.createElement("button");
        button2.className =
          "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80";
        button2.textContent = "Remover Candidatura";

        button2.addEventListener("click", () =>
          removerCandidatura(oportunidade.id)
        );

        textContainer.appendChild(button2);
      } else {
        const button = document.createElement("button");
        button.className =
          "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
        button.textContent = "Candidatar";

        button.addEventListener("click", () => candidatar(oportunidade.id));

        textContainer.appendChild(button);
      }
    }

    container.appendChild(card);
  }
}
