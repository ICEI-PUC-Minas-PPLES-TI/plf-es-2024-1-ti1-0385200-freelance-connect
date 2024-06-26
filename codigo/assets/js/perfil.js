function formatarTelefone(telefone) {
  // Remove todos os caracteres que não são números
  telefone = telefone.replace(/\D/g, "");

  // Se o número começar com '55', removemos esse prefixo
  if (telefone.length > 11 && telefone.startsWith("55")) {
    telefone = telefone.substring(2);
  }

  // Verifica o tamanho do telefone para determinar o formato correto
  if (telefone.length === 11) {
    // Formato com DDD e número de celular (11 dígitos)
    return telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (telefone.length === 10) {
    // Formato com DDD e número fixo (10 dígitos)
    return telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  } else if (telefone.length === 9) {
    // Formato sem DDD e número de celular (9 dígitos)
    return telefone.replace(/^(\d{5})(\d{4})$/, "$1-$2");
  } else if (telefone.length === 8) {
    // Formato sem DDD e número fixo (8 dígitos)
    return telefone.replace(/^(\d{4})(\d{4})$/, "$1-$2");
  } else {
    // Se não for nenhum dos formatos esperados, retorna o número original
    return telefone;
  }
}

const buttonEdit = document.getElementById("edit-btn");
const dadosContainer = document.getElementById("dados-container");
const editContainer = document.getElementById("edit-container");

buttonEdit.addEventListener("click", () => {
  dadosContainer.classList.add("hidden");

  editContainer.classList.remove("hidden");
  editContainer.classList.add("visible");
});

const userNameElement = document.getElementById("user-name");
const userNameElement2 = document.getElementById("userName");
const userEmailElement = document.getElementById("user-email");
const userEmailElement2 = document.getElementById("userEmail");
const userRoleElement = document.getElementById("user-role");
const userTeleElement = document.getElementById("user-tel");
const userImageElement = document.getElementById("user-avatar");
const userImageElement2 = document.getElementById("user-avatar2");
const userCNPJElement = document.getElementById("user-cnpj");

window.addEventListener("load", () => {
  const userData = JSON.parse(sessionStorage.getItem("user"));

  if (!userData) {
    return (window.location.href = "login.html");
  }

  userNameElement.innerText = userData.name;
  userEmailElement.innerText = userData.email;
  userRoleElement.innerText = userData.type;
  userTeleElement.innerText = formatarTelefone(userData.tel);
  if (userImageElement) {
    userImageElement.src = userData.logo;
  }
  userImageElement2.src = userData.logo;
  userNameElement2.innerText = userData.name;
  userEmailElement2.innerText = userData.email;
  if (userData.type === "empresa") {
    userCNPJElement.innerText = userData.cnpj;
  }

  if (userData.type === "empresa") {
    document.getElementById("cnpj-container").classList.remove("hidden");
  }

  getPerfilInfo(userData.id);
});

async function deleteUser() {
  const userData = JSON.parse(sessionStorage.getItem("user"));

  if (!userData) {
    return;
  }

  const res = await fetch(`${API_URL}/users/${userData.id}`, {
    method: "DELETE",
  }).then((response) => response.json());

  if (res) {
    alert("Usuário deletado com sucesso!");
    window.location.href = "login.html";
  }
}

const dltBtn = document.getElementById("delete-btn");

dltBtn.addEventListener("click", deleteUser);

async function editUserProfile() {}

async function editUserData(ev) {
  ev.preventDefault();
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const inputNome = document.getElementById("input-nome")?.value || "";
  const inputTelefone = document.getElementById("input-telefone")?.value || "";
  const inputCNPJ = document.getElementById("input-cnpj")?.value || "";
  const inputLogo = document.getElementById("input-logo")?.value || "";
  const inputSenha = document.getElementById("input-senha")?.value || "";
  const inputConfirmarSenha =
    document.getElementById("input-confirmar-senha")?.value || "";

  if (inputSenha && inputConfirmarSenha) {
    if (inputSenha !== inputConfirmarSenha) {
      alert("As senhas não são iguais!");
      return;
    } else {
      Body.password = inputSenha;
    }
  }

  const Body = {};

  if (inputNome) {
    Body.name = inputNome;
  }

  if (inputTelefone) {
    Body.tel = inputTelefone;
  }

  if (inputCNPJ) {
    Body.cnpj = inputCNPJ;
  }

  if (inputLogo) {
    Body.logo = inputLogo;
  }

  const res = await fetch(`${API_URL}/users/${userData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Body),
  }).then((response) => response.json());

  if (res) {
    console.log(res);
    alert("Usuário editado com sucesso!");
    sessionStorage.removeItem("user");
    window.location.href = "login.html";
  }
}

const editDataForm = document.getElementById("edit-data-form");

editDataForm.addEventListener("submit", editUserData);

async function editUserProfile(ev) {
  ev.preventDefault();
  const userData = JSON.parse(sessionStorage.getItem("user"));

  const actualProfileInfos = await fetch(
    `${API_URL}/userProfile/?userId=${userData.id}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());

  if (!actualProfileInfos) {
    return alert("Usuário não possui um perfil!");
  }

  const inputDescricao = document.getElementById("input-descricao")?.value;

  const inptuNomeServico1 =
    document.getElementById("input-nome-servico1")?.value || "";
  const inputDescricaoServico1 =
    document.getElementById("input-descrição-servico1")?.value || "";
  const inpuNomeServico2 =
    document.getElementById("input-nome-servico2")?.value || "";
  const inputDescricaoServico2 =
    document.getElementById("input-descrição-servico2")?.value || "";

  const inputEspecialidade1 =
    document.getElementById("input-especialidade1")?.value || "";
  const inputEspecialidadeDescricao1 =
    document.getElementById("input-descrição-especialidade1")?.value || "";

  const inputEspecialidade2 =
    document.getElementById("input-especialidade2")?.value || "";
  const inputEspecialidadeDescricao2 =
    document.getElementById("input-descrição-especialidade2")?.value || "";

  const inputEspecialidade3 =
    document.getElementById("input-especialidade3")?.value || "";
  const inputEspecialidadeDescricao3 =
    document.getElementById("input-descrição-especialidade3")?.value || "";

  const inputGithub = document.getElementById("input-github")?.value || "";
  const inputLinkedin = document.getElementById("input-linkedin")?.value || "";
  const inputTwitter = document.getElementById("input-twitter")?.value || "";
  const inputYoutube = document.getElementById("input-youtube")?.value || "";

  const Body = {
    profile: {
      description: inputDescricao,
      services: [
        { name: inptuNomeServico1, description: inputDescricaoServico1 },
        { name: inpuNomeServico2, description: inputDescricaoServico2 },
      ],
    },
    especialidades: [
      { name: inputEspecialidade1, description: inputEspecialidadeDescricao1 },
      { name: inputEspecialidade2, description: inputEspecialidadeDescricao2 },
      { name: inputEspecialidade3, description: inputEspecialidadeDescricao3 },
    ],
    socials: {
      linkGithub: inputGithub,
      linkLinkedin: inputLinkedin,
      linkTwitter: inputTwitter,
      linkYoutube: inputYoutube,
    },
  };

  // Remover campos vazios
  if (!inptuNomeServico1 && !inputDescricaoServico1) {
    delete Body.profile.services[0];
  }
  if (!inpuNomeServico2 && !inputDescricaoServico2) {
    delete Body.profile.services[1];
  }
  Body.profile.services = Body.profile.services.filter(Boolean);

  if (!inputEspecialidade1 && !inputEspecialidadeDescricao1) {
    delete Body.especialidades[0];
  }
  if (!inputEspecialidade2 && !inputEspecialidadeDescricao2) {
    delete Body.especialidades[1];
  }
  if (!inputEspecialidade3 && !inputEspecialidadeDescricao3) {
    delete Body.especialidades[2];
  }
  Body.especialidades = Body.especialidades.filter(Boolean);

  if (!inputGithub) {
    delete Body.socials.linkGithub;
  }
  if (!inputLinkedin) {
    delete Body.socials.linkLinkedin;
  }
  if (!inputTwitter) {
    delete Body.socials.linkTwitter;
  }
  if (!inputYoutube) {
    delete Body.socials.linkYoutube;
  }

  console.log("Body:", Body);
  return;

  const res = await fetch(
    `${API_URL}/userProfile/${actualProfileInfos[0].id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Body),
    }
  ).then((response) => response.json());

  if (res) {
    alert("Usuário editado com sucesso!");
  }
}

const editProfileForm = document.getElementById("edit-profile-form");

editProfileForm.addEventListener("submit", editUserProfile);

async function getPerfilInfo(id) {
  const res = await fetch(`${API_URL}/userProfile/?userId=${id}`).then(
    (response) => response.json()
  );

  const title = document.getElementById("dados-title");
  const descricao = document.getElementById("dados-descricao");
  const buttonCriarPerfil = document.createElement("button");
  buttonCriarPerfil.className =
    "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
  buttonCriarPerfil.textContent = "Criar Perfil";

  buttonCriarPerfil.addEventListener("click", async () => {
    const res = await fetch(`${API_URL}/userProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
      }),
    }).then((response) => response.json());

    if (res) {
      alert(
        "Perfil criado com sucesso!, agora edite e coloque as suas informações"
      );
    }
  });

  console.log("res", res);

  if (res.length < 0) {
    descricao.textContent = "Você não possui perfil";
    descricao.appendChild(buttonCriarPerfil);
    descricao.appendChild(buttonCriarPerfil);
    return;
  }

  descricao.textContent = res[0].profile.description;

  const gitHubLink = document.getElementById("data-github");
  gitHubLink.href = res[0].socials.linkGithub;
  gitHubLink.textContent = "Link para o github";

  const linkedinLink = document.getElementById("data-linkedin");
  linkedinLink.href = res[0].socials.linkLinkedin;
  linkedinLink.textContent = "Link para o Linkedin";

  const twitterLink = document.getElementById("data-twitter");
  twitterLink.href = res[0].socials.linkTwitter;
  twitterLink.textContent = "Link para o Twitter";

  const linkYT = document.getElementById("data-youtube");
  linkYT.href = res[0].socials.linkYotube;
  linkYT.textContent = "Link para o data-youtube";

  const servico1title = document.getElementById("data-servico-1-t");
  servico1title.textContent = res[0].services[0].title;

  const servico1desc = document.getElementById("data-servico-1-d");
  servico1desc.textContent = res[0].services[0].description;

  const servico2title = document.getElementById("data-servico-2-t");
  servico2title.textContent = res[0].services[1].title;

  const servico2desc = document.getElementById("data-servico-2-d");
  servico2desc.textContent = res[0].services[1].description;

  const especialidade1title = document.getElementById("data-especialidade-1-t");
  especialidade1title.textContent = res[0].especialidades[0].title;
  const especialidade1desc = document.getElementById("data-especialidade-1-d");
  especialidade1desc.textContent = res[0].especialidades[0].description;
  const especialidade2title = document.getElementById("data-especialidade-1-t");
  especialidade2title.textContent = res[0].especialidades[1].title;
  const especialidade2desc = document.getElementById("data-especialidade-2-d");
  especialidade2desc.textContent = res[0].especialidades[1].description;
  const especialidade3title = document.getElementById("data-especialidade-3-t");
  especialidade3title.textContent = res[0].especialidades[2].title;
  const especialidade3desc = document.getElementById("data-especialidade-3-d");
  especialidade3desc.textContent = res[0].especialidades[2].description;
}
