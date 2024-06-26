const container = document.getElementById("vagas");

window.addEventListener("load", () => {
  loadVagas();
});

async function deleteVagas(id) {
  const res = await fetch(`${API_URL}/vagas/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());

  if (res) {
    alert(res);
  }
}

async function loadVagas() {
  const data = await fetch("http://localhost:3000/vagas").then((response) =>
    response.json()
  );

  const companies = await fetch("http://localhost:3000/users").then(
    (response) => response.json()
  );

  const empresaDados = data.map((vaga) => {
    const empresa = companies.find((company) => company.id === vaga.empresaId);

    return {
      ...vaga,
      logo: empresa.logo,
      emailEmpresa: empresa.email,
    };
  });

  container.innerHTML = "";

  empresaDados.forEach(async (oportunidade) => {
    console.log(oportunidade);
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

    button.addEventListener("click", async () => {
      const res = await fetch(`http://localhost:3000/userVaga`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: JSON.parse(sessionStorage.getItem("user")).id,
          vagaId: oportunidade.id,
          status: "pendente",
        }),
      }).then((response) => response.json());

      sendMail(oportunidade.company, oportunidade.emailEmpresa).then(() => {
        if (res) {
          alert("Email enviado com sucesso!");
          alert("Candidatura enviada");
        }
      });
    });

    const button2 = document.createElement("button");
    button2.className =
      "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80";
    button2.textContent = "Remover Candidatura";

    button2.addEventListener("click", async () => {
      const getUserVaga = await fetch(
        `http://localhost:3000/userVaga/?userId=${
          JSON.parse(sessionStorage.getItem("user")).id
        }&vagaId=${oportunidade.id}`
      ).then((response) => response.json());

      const res = await fetch(
        `http://localhost:3000/userVaga/${getUserVaga[0].id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());

      if (res) {
        alert("Usuario removido da vaga");
      }
    });

    const userRole = JSON.parse(sessionStorage.getItem("user")).type;
    if (userRole === "freelancer") {
      const res = await fetch(
        `http://localhost:3000/userVaga/?vagaId=${oportunidade.id}`,
        {}
      ).then((response) => response.json());

      if (Array.isArray(res) && res.length > 0) {
        // Se res é um array e não está vazio
        textContainer.appendChild(button2);
      } else if (res) {
        // Se res não é um array vazio (inclui objetos e arrays vazios)
        textContainer.appendChild(button);
      }
    }

    container.appendChild(card);
  });
}
