window.onload = function() {
  carregarUltimosDados();
};

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

function carregarUltimosDados() {
  const empresas = JSON.parse(localStorage.getItem('empresas')) || [];

  if (empresas.length > 0) {
    const ultimoClienteIndex = empresas.length - 1;
    const ultimoCliente = empresas[ultimoClienteIndex];
    document.getElementById('NomeCliente').value = ultimoCliente.nome || '';
    document.getElementById('TelefoneCliente').value = ultimoCliente.telefone || '';
    document.getElementById('EmailCliente').value = ultimoCliente.email || '';
    document.getElementById('CNPJCliente').value = ultimoCliente.cnpj || '';
    document.getElementById('SenhaCliente').value = ultimoCliente.senha || '';
  }
}

function validarCadastro() {
  const nome = document.getElementById('NomeCliente').value;
  const telefone = document.getElementById('TelefoneCliente').value;
  const email = document.getElementById('EmailCliente').value;
  const cnpj = document.getElementById('CNPJCliente').value;
  const senha = document.getElementById('SenhaCliente').value;
  const confirmarSenha = document.getElementById('PasswordConfirmation').value;

  if (!nome || !telefone || !email || !cnpj || !senha) {
    document.getElementById('msg').innerHTML = '<p style="color: red;">Preencha todos os campos!</p>';
    return;
  }

  if (senha !== confirmarSenha) {
    document.getElementById('msg').innerHTML = '<p style="color: red;">As senhas não são iguais!</p>';
    return;
  }

  const clienteIndex = localStorage.getItem('clienteIndex');
  let empresas = JSON.parse(localStorage.getItem('empresas')) || [];

  if (clienteIndex !== null && clienteIndex < empresas.length) {
    empresas[clienteIndex] = { nome, telefone, email, cnpj, senha };
  } else {
    empresas.push({ nome, telefone, email, cnpj, senha });
  }

  localStorage.setItem('empresas', JSON.stringify(empresas));
  document.getElementById('msg').innerHTML = '<p style="color: green;">Dados atualizados com sucesso!</p>';


  window.location.href = 'dadosEmpresas.html';
}
