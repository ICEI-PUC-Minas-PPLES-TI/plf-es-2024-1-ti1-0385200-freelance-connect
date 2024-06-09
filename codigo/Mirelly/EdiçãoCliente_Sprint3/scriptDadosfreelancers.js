function carregarDadosfreelancers() {
    const clientData = document.getElementById('clientData');
    clientData.innerHTML = '';
  
    const freelancers = JSON.parse(localStorage.getItem('freelancers')) || [];
  
    freelancers.forEach((freelancers, index) => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td class="border px-4 py-2">${freelancers.nome}</td>
        <td class="border px-4 py-2">${freelancers.telefone}</td>
        <td class="border px-4 py-2">${freelancers.email}</td>
        <td class="border px-4 py-2">${freelancers.senha}</td>
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
      const freelancers = JSON.parse(localStorage.getItem('freelancers')) || [];
      freelancers.splice(index, 1);
      localStorage.setItem('freelancers', JSON.stringify(freelancers));
      carregarDadosfreelancers();
    }
  }
  
  function incluirCliente() {
    const nome = document.getElementById('novoNome').value;
    const telefone = document.getElementById('novoTelefone').value;
    const email = document.getElementById('novoEmail').value;
    const senha = document.getElementById('novaSenha').value;
  
    if (!nome || !telefone || !email || !senha) {
      alert('Preencha todos os campos!');
      return;
    }
  
    const freelancers = JSON.parse(localStorage.getItem('freelancers')) || [];
    freelancers.push({ nome, telefone, email, senha});
    localStorage.setItem('freelancers', JSON.stringify(freelancers));
    carregarDadosfreelancers();
  
    document.getElementById('formAdicionarCliente').reset();
  }
  
  window.onload = carregarDadosfreelancers;
  