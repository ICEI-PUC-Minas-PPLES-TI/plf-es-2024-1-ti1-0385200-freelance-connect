const apiUrl = "https://connect-tech-back.onrender.com/vagas";

const formOferta = document.getElementById("formOferta");

function getEmpressData() {
  const data = JSON.parse(sessionStorage.getItem("user"));

  if (data.type === "empresa") {
    return data;
  } else {
    alert("Apenas usuários da empresa podem criar vagas");
  }
}

formOferta.addEventListener("submit", async function (event) {
  event.preventDefault();

  const empresaData = getEmpressData();

  const titulo = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const salarioMinimo = document.getElementById("salarioMinimo").value;
  const salarioMaximo = document.getElementById("salarioMaximo").value;
  const lock = document.getElementById("lock").value;

  // const vagas = await fetch(apiUrl).then((response) => response.json());

  const body = {
    title: titulo,
    description: description,
    company: empresaData.name,
    localization: lock,
    companyLogo: empresaData.logo,
    valueMin: salarioMinimo,
    valueMax: salarioMaximo,
    empresaId: empresaData.id,
  };

  // return;
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      alert("Erro ao inserir vaga, error:" + res.message);
    }

    const result = await res.json();

    alert("Vaga inserida com sucesso");
    document.getElementById("formOferta").reset();
  } catch (error) {
    alert("Erro ao inserir vaga, error:" + error);
  }
});
