const cardsContainer = document.getElementById("cards");
window.addEventListener("DOMContentLoaded", () => {
  loadVagasTelaInicial();
});

async function loadVagasTelaInicial() {
  const data = await fetch(
    "https://connect-tech-back.onrender.com/vagas?limit=5"
  ).then((response) => response.json());

  const companies = await fetch(
    "https://connect-tech-back.onrender.com/users"
  ).then((response) => response.json());

  const empresaDados = data
    .map((vaga) => {
      const empresa = companies.find(
        (company) => company.id === vaga.empresaId
      );

      return {
        ...vaga,
        logo: empresa.logo,
      };
    })
    .slice(0, 5);

  empresaDados.forEach((current) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("h4");
    cardTitle.className = "card__title";
    cardTitle.textContent = current.title;
    card.appendChild(cardTitle);

    if (current.tags) {
      const cardBadges = document.createElement("div");
      cardBadges.className = "card__badges";

      current.tags.forEach((tag) => {
        const badge = document.createElement("span");
        badge.className = "card__badge";
        badge.textContent = tag;
        cardBadges.appendChild(badge);
      });
      card.appendChild(cardBadges);
    }

    const cardValues = document.createElement("div");
    const valueMin = document.createElement("span");
    valueMin.className = "card__value";
    valueMin.textContent = current.valueMin;
    cardValues.appendChild(valueMin);

    const dash = document.createElement("span");
    dash.textContent = " - ";
    cardValues.appendChild(dash);

    const valueMax = document.createElement("span");
    valueMax.className = "card__value";
    valueMax.textContent = current.valueMax;
    cardValues.appendChild(valueMax);

    card.appendChild(cardValues);

    const flexContainer = document.createElement("div");
    flexContainer.className = "flex items-center gap-3";

    const logoContainer = document.createElement("div");
    logoContainer.className =
      "bg-[#24272D] rounded-lg overflow-hidden w-10 h-10 flex items-center justify-center";
    const logo = document.createElement("img");
    logo.src = current.logo;
    logoContainer.appendChild(logo);
    flexContainer.appendChild(logoContainer);

    const companyInfo = document.createElement("div");
    const companyName = document.createElement("p");
    companyName.textContent = current.company;
    companyInfo.appendChild(companyName);

    const companyRange = document.createElement("p");
    companyRange.textContent = `${current.valueMin} - ${current.valueMax}`;
    companyInfo.appendChild(companyRange);

    flexContainer.appendChild(companyInfo);
    card.appendChild(flexContainer);

    cardsContainer.appendChild(card);
  });
}
