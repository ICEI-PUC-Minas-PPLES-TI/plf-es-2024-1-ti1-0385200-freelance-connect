const vagasContainer = document.getElementById("vagas");
const candidatosContainer = document.getElementById("candidatos");

window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch(`${API_URL}/vagas`).then((response) =>
    response.json()
  );

  loadVagas(res);
});

function loadVagas(data) {
  vagasContainer.innerHTML = "";

  if (!data) {
    return (vagasContainer.innerHTML = "Nenhuma vaga encontrada");
  }

  data.forEach((vaga) => {
    const card = document.createElement("article");
    card.addEventListener("click", () => {
      loadCandidatos(vaga.id, vaga.title, vaga.company);
    });
    card.className = "border bg-white p-5 rounded-lg flex items-start gap-10";

    const cardImage = document.createElement("img");
    cardImage.className = "h-20 rounded-md";
    cardImage.src = vaga.companyLogo;
    card.appendChild(cardImage);

    const textContainer = document.createElement("div");
    textContainer.className = "flex flex-col gap-1";

    card.appendChild(textContainer);

    const cardTitle = document.createElement("h4");
    cardTitle.className = "text-2xl font-semibold";
    cardTitle.textContent = vaga.title;
    textContainer.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.className = "text-md text-gray-600 font-medium";
    cardDescription.textContent = vaga.description;
    textContainer.appendChild(cardDescription);

    const exmpresaInfo = document.createElement("p");
    exmpresaInfo.className = "text-sm text-gray-400";
    exmpresaInfo.textContent = vaga.company;
    textContainer.appendChild(exmpresaInfo);

    const valuesInfo = document.createElement("p");
    valuesInfo.className = "font-bold text-sm";
    valuesInfo.textContent = `R$${vaga.valueMin} - R$${vaga.valueMax}`;
    textContainer.appendChild(valuesInfo);

    vagasContainer.appendChild(card);
  });
}

function sendMail(name, email, nameEmpresa, tituloVaga, idVaga) {
  const emailEmpresa = JSON.parse(sessionStorage.getItem("user")).email;
  var params = {
    name: name,
    nomeEmpresa: nameEmpresa,
    emailEmpresa: emailEmpresa,
    email: email,
    tituloVaga: tituloVaga,
    idVaga: idVaga,
    reciver: email,
  };

  const serviceId = "service_phlutz8";
  const templateId = "template_2w0kmiq";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      alert("Email enviado com sucesso!");
    })
    .catch((err) => alert("Ocorreu um erro. Tente novamente mais tarde."));
}

async function loadCandidatos(vagaId, vagaTitulo, vagaCompany) {
  candidatosContainer.innerHTML = "";

  const userVagas = await fetch(`${API_URL}/userVaga`).then((response) =>
    response.json()
  );

  const users = await fetch(`${API_URL}/users`).then((response) =>
    response.json()
  );

  const userMap = new Map(users.map((user) => [user.id, user]));

  const candidatos = userVagas
    .filter((userVaga) => userVaga.vagaId === vagaId)
    .map((userVaga) => userMap.get(userVaga.userId))
    .filter(Boolean); // Remove valores indefinidos

  const candidatoElement = document.createElement("article");
  candidatoElement.className =
    "border bg-white p-5 rounded-lg flex items-center gap-10 w-full";

  if (candidatos.length < 1) {
    return (candidatosContainer.innerHTML = `<p>Nenhum candidato para esta vaga.</p>`);
  }

  candidatos.forEach((candidato) => {
    candidatoElement.innerHTML = `
        <div class="flex items-center gap-10">
        <img src="${candidato.logo}" alt="${candidato.name}" class="w-20 h-20 overflow-hidden rounded-lg">
          <div>
            <p class="text-2xl font-bold">${candidato.name}</p>
            <p class="text-lg font-semibold">${candidato.email}</p>
            <p class="text-lg font-medium">${candidato.tel}</p>

            <button onclick="sendMail('${candidato.name}', '${candidato.email}', '${vagaCompany}', '${vagaTitulo}', '${vagaId}')" class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">Enviar Email</button>
          </div>
        </div>
    `;
    candidatosContainer.appendChild(candidatoElement);
  });
}
