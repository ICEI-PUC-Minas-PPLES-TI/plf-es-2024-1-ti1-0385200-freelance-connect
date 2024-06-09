function carregarDadosempresas() {
    const clientData = document.getElementById('clientData');
    clientData.innerHTML = '';
  
    const empresas = JSON.parse(localStorage.getItem('empresas')) || [];
  
    empresas.forEach((cliente, index) => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td class="border px-4 py-2">${cliente.nome}</td>
        <td class="border px-4 py-2">${cliente.telefone}</td>
        <td class="border px-4 py-2">${cliente.email}</td>
        <td class="border px-4 py-2">${cliente.cnpj}</td>
        <td class="border px-4 py-2">${cliente.senha}</td>
        <td class="border px-4 py-2">
          <button onclick="editarCliente(${index})" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Editar</button>
          <button onclick="excluirCliente(${index})" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Excluir</button>
        </td>
      `;
  
      clientData.appendChild(row);
    });
  }
  
  function voltar() {
    window.location.href = 'TeladeEdição.html';
  }
  
  function editarCliente(index) {
    localStorage.setItem('clienteIndex', index);
    window.location.href = 'index.html';
  }
  
  function excluirCliente(index) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      const empresas = JSON.parse(localStorage.getItem('empresas')) || [];
      empresas.splice(index, 1);
      localStorage.setItem('empresas', JSON.stringify(empresas));
      carregarDadosempresas();
    }
  }
  
  function incluirCliente() {
    const nome = document.getElementById('novoNome').value;
    const telefone = document.getElementById('novoTelefone').value;
    const email = document.getElementById('novoEmail').value;
    const cnpj = document.getElementById('novoCNPJ').value;
    const senha = document.getElementById('novaSenha').value;
  
    if (!nome || !telefone || !email || !cnpj || !senha) {
      alert('Preencha todos os campos!');
      return;
    }
  
    const empresas = JSON.parse(localStorage.getItem('empresas')) || [];
    empresas.push({ nome, telefone, email, cnpj, senha});
    localStorage.setItem('empresas', JSON.stringify(empresas));
    carregarDadosempresas();
  
    document.getElementById('formAdicionarCliente').reset();
  }
  
  window.onload = carregarDadosempresas;
  