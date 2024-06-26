window.addEventListener("load", () => {
  const data = JSON.parse(sessionStorage.getItem("user"));

  const userImageElement = document.getElementById("user-avatar");
  const cadastaOfertas = document.getElementById("cadastro-ofertas");
  const minhasOfertas = document.getElementById("lista-minhas-ofertas");
  const linkOfertas = document.getElementById("ofertas-link");
  const minhasCandidaturas = document.getElementById("minhas-candidaturas");

  const userRole = data.type;

  if (userRole === "freelancer") {
    cadastaOfertas.className = "hidden";
    minhasOfertas.className = "hidden";
    minhasCandidaturas.classList.remove("hidden");

    linkOfertas.className.remove = "hidden";
  } else if (userRole === "empresa") {
    cadastaOfertas.className.remove = "hidden";
    minhasOfertas.className.remove = "hidden";
    linkOfertas.className = "hidden";
    minhasCandidaturas.className = "hidden";
  }

  userImageElement.src = data.logo;
});
