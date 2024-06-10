const oportunidades = [
  {
    title: "Product Designer",
    tags: ["Full time", "Product"],
    company: "GitLab",
    companyLogo: "/assets/imgs/gitlabicon.png",
    valueMin: 34,
    valueMax: 45,
  },
  {
    title: "Senior Designer",
    tags: ["Full time", "Head of design"],
    company: "Hotjar",
    companyLogo: "assets/imgs/hotjar.png",
    valueMin: 25,
    valueMax: 45,
  },
  {
    title: "Junior developer",
    tags: ["Full time", "Product"],
    company: "gitHub",
    companyLogo: "assets/imgs/github.png",
    valueMin: 25,
    valueMax: 45,
  },
  {
    title: "Junior developer",
    tags: ["Full time", "Product"],
    company: "gitHub",
    companyLogo: "assets/imgs/github.png",
    valueMin: 25,
    valueMax: 45,
  },
];

const cardsContainer = document.getElementById("cards");

oportunidades.forEach((oportunidade) => {
  const card = document.createElement("div");
  card.className = "card";

  const cardTitle = document.createElement("h4");
  cardTitle.className = "card__title";
  cardTitle.textContent = oportunidade.title;
  card.appendChild(cardTitle);

  const cardBadges = document.createElement("div");
  cardBadges.className = "card__badges";
  oportunidade.tags.forEach((tag) => {
    const badge = document.createElement("span");
    badge.className = "card__badge";
    badge.textContent = tag;
    cardBadges.appendChild(badge);
  });
  card.appendChild(cardBadges);

  const cardValues = document.createElement("div");
  const valueMin = document.createElement("span");
  valueMin.className = "card__value";
  valueMin.textContent = oportunidade.valueMin;
  cardValues.appendChild(valueMin);

  const dash = document.createElement("span");
  dash.textContent = " - ";
  cardValues.appendChild(dash);

  const valueMax = document.createElement("span");
  valueMax.className = "card__value";
  valueMax.textContent = oportunidade.valueMax;
  cardValues.appendChild(valueMax);

  card.appendChild(cardValues);

  const flexContainer = document.createElement("div");
  flexContainer.className = "flex items-center gap-3";

  const logoContainer = document.createElement("div");
  logoContainer.className =
    "bg-[#24272D] rounded-lg w-10 h-10 flex items-center justify-center";
  const logo = document.createElement("img");
  logo.src = oportunidade.companyLogo;
  logoContainer.appendChild(logo);
  flexContainer.appendChild(logoContainer);

  const companyInfo = document.createElement("div");
  const companyName = document.createElement("p");
  companyName.textContent = oportunidade.company;
  companyInfo.appendChild(companyName);

  const companyRange = document.createElement("p");
  companyRange.textContent = `${oportunidade.valueMin} - ${oportunidade.valueMax}`;
  companyInfo.appendChild(companyRange);

  flexContainer.appendChild(companyInfo);
  card.appendChild(flexContainer);

  cardsContainer.appendChild(card);
});
