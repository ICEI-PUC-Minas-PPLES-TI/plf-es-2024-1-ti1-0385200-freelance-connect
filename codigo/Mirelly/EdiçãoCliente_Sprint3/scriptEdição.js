window.onload = function() {
  carregarUltimosDados();
  console.log("Página carregada e últimos dados carregados.");

  document.getElementById('editarFoto').addEventListener('click', function () {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function (event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('fotoPerfil').src = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    input.click();
  });

  document.getElementById('removerFoto').addEventListener('click', function() {
    document.getElementById('fotoPerfil').src = './img/unnamed.png';
  });

  document.getElementById('confirmarCadastro').addEventListener('click', validarCadastro);
  document.getElementById('testeButton').addEventListener('click', redirecionar);
};

function carregarUltimosDados() {
  const freelancers = JSON.parse(localStorage.getItem('freelancers')) || [];

  if (freelancers.length > 0) {
    const ultimoClienteIndex = freelancers.length - 1;
    const ultimoCliente = freelancers[ultimoClienteIndex];
    document.getElementById('NomeCliente').value = ultimoCliente.nome || '';
    document.getElementById('TelefoneCliente').value = ultimoCliente.telefone || '';
    document.getElementById('EmailCliente').value = ultimoCliente.email || '';
    document.getElementById('SenhaCliente').value = ultimoCliente.senha || '';
    console.log("Dados carregados:", ultimoCliente);
  }
}

function validarCadastro() {
  console.log("Iniciando validação de cadastro.");
  const nome = document.getElementById('NomeCliente').value;
  const telefone = document.getElementById('TelefoneCliente').value;
  const email = document.getElementById('EmailCliente').value;
  const senha = document.getElementById('SenhaCliente').value;
  const confirmarSenha = document.getElementById('PasswordConfirmation').value;

  if (!nome || !telefone || !email || !senha) {
    document.getElementById('msg').innerHTML = '<p style="color: red;">Preencha todos os campos!</p>';
    console.log("Erro: Preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    document.getElementById('msg').innerHTML = '<p style="color: red;">As senhas não são iguais!</p>';
    console.log("Erro: As senhas não são iguais!");
    return;
  }

  const clienteIndex = localStorage.getItem('clienteIndex');
  let freelancers = JSON.parse(localStorage.getItem('freelancers')) || [];

  if (clienteIndex !== null && clienteIndex < freelancers.length) {
    freelancers[clienteIndex] = { nome, telefone, email, senha };
    console.log("Atualizando freelancer existente:", freelancers[clienteIndex]);
  } else {
    freelancers.push({ nome, telefone, email, senha });
    console.log("Adicionando novo freelancer:", { nome, telefone, email, senha });
  }

  localStorage.setItem('freelancers', JSON.stringify(freelancers));
  document.getElementById('msg').innerHTML = '<p style="color: green;">Dados atualizados com sucesso!</p>';
  console.log("Dados atualizados com sucesso!");

  // Redirecionamento
  console.log("Redirecionando para dadosfreelancers.html");
  window.location.href = 'dadosfreelancers.html';
}

