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
    document.getElementById('fotoPerfil').src = '/img/unnamed.png';
});

// Função para carregar dados do localStorage
function carregarDados() {
  const nome = localStorage.getItem('nome') || 'João Silva';
  const telefone = localStorage.getItem('telefone') || '123456789';
  const email = localStorage.getItem('email') || 'joao.silva@gmail.com';
  const senha = localStorage.getItem('senha') || '123';

  document.getElementById('NomeCliente').value = nome;
  document.getElementById('TelefoneCliente').value = telefone;
  document.getElementById('EmailCliente').value = email;
  document.getElementById('SenhaCliente').value = senha;
}

function validarCadastro() {
  const nome = document.getElementById('NomeCliente').value;
  const telefone = document.getElementById('TelefoneCliente').value;
  const email = document.getElementById('EmailCliente').value;
  const senha = document.getElementById('SenhaCliente').value;
  const confirmarSenha = document.getElementById('PasswordConfirmation').value;

  if (!nome || !telefone || !email) {
    document.getElementById('msg').innerHTML = '<p style="color: red;">Preencha todos os campos!</p>';
    return;
  }

  if (senha !== confirmarSenha) {
    document.getElementById('msg').innerHTML = '<p style="color: red;">As senhas não são iguais!</p>';
    return;
  }

  localStorage.setItem('nome', nome);
  localStorage.setItem('telefone', telefone);
  localStorage.setItem('email', email);

  document.getElementById('msg').innerHTML = '<p style="color: green;">Dados atualizados com sucesso!</p>';
}

window.onload = carregarDados;