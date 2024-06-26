async function sendMail(remetente, emailRementente) {
  const data = JSON.parse(sessionStorage.getItem("user"));
  const templateParams = {
    name: remetente,
    email: emailRementente,
    message: `o usuario ${data.name} se candidatou a essa vaga`,
  };

  emailjs
    .send("service_eq8f568", "template_2w0kmiq", templateParams)
    .then((res) => {
      alert("Email enviado com sucesso!");
    });
}
