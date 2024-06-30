window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(sessionStorage.getItem("user"));

  const userImageElement = document.getElementById("user-avatar");
  const cadastaOfertas = document.getElementById("cadastro-ofertas");
  const minhasOfertas = document.getElementById("lista-minhas-ofertas");
  const linkOfertas = document.getElementById("ofertas-link");
  const minhasCandidaturas = document.getElementById("minhas-candidaturas");
  const candidatos = document.getElementById("cadidatos");

  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userRole = data.type;

  minhasCandidaturas.classList.add("hidden");

  if (userRole === "freelancer") {
    cadastaOfertas.className = "hidden";
    minhasOfertas.className = "hidden";
    // minhasCandidaturas.classList.remove("hidden");
    candidatos.classList.add("hidden");

    linkOfertas.className.remove = "hidden";
  } else if (userRole === "empresa") {
    cadastaOfertas.className.remove = "hidden";
    minhasOfertas.className.remove = "hidden";
    linkOfertas.className = "hidden";
    // minhasCandidaturas.className = "hidden";
    candidatos.classList.remove("hidden");
  }

  if (data) {
    if (data.src) {
      userImageElement.src = data.logo;
    } else {
      userImageElement.src = "https://ui-avatars.com/api/?name=Connect+Tech";
    }
    userName.innerText = data.name;
    userEmail.innerText = data.email;
  }
});
