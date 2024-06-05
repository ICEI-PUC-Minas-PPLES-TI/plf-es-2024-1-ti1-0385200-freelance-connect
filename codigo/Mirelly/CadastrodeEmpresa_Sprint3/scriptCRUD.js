const apiUrl = 'https://a30fb24e-1ca4-4c36-b900-88a65b8f2d72-00-12mrbsq9q452a.kirk.replit.dev/empresas';
const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sEmail = document.querySelector('#m-email');
const sTelefone = document.querySelector('#m-telefone');
const sCNPJ = document.querySelector('#m-cnpj');
const sSenha = document.querySelector('#m-senha');
const sId = document.querySelector('#m-id');
const btnSalvar = document.querySelector('#btnSalvar');

let itens = [];
let isEditing = false;

function goBack() {
  window.location.href = "./TelaDeCadastro.html";
}

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  if (edit) {
    sNome.value = itens[index].nome;
    sEmail.value = itens[index].email;
    sTelefone.value = itens[index].telefone;
    sCNPJ.value = itens[index].cnpj;
    sSenha.value = itens[index].senha;
    sId.value = itens[index].id;
    isEditing = true;
  } else {
    sNome.value = '';
    sEmail.value = '';
    sTelefone.value = '';
    sCNPJ.value = '';
    sSenha.value = '';
    sId.value = '';
    isEditing = false;
  }

  sSenha.type = 'password';
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(id) {
  console.log('ID do cliente a ser excluído:', id);
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao excluir cliente');
    }
    return response.json();
  })
  .then(data => {
    loadItens();
  })
  .catch(error => {
    console.error('Erro:', error);
    alert("Ocorreu um erro ao excluir o cliente");
  });
}

function insertItem(item, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>${item.telefone}</td>
    <td>${item.cnpj}</td>
    <td>*****</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem('${item.id}')"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
  e.preventDefault();

  if (sNome.value === '' || sEmail.value === '' || sTelefone.value === '' || sCNPJ.value === '' || sSenha.value === '') {
    return;
  }

  let newItem = {
    nome: sNome.value,
    email: sEmail.value,
    telefone: sTelefone.value,
    cnpj: sCNPJ.value,
    senha: sSenha.value
  };

  if (isEditing) {
    const id = sId.value;
    fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar cliente');
      }
      return response.json();
    })
    .then(data => {
      modal.classList.remove('active');
      loadItens();
    })
    .catch(error => {
      console.error('Erro:', error);
      alert("Ocorreu um erro ao atualizar o cliente");
    });
  } else {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar cliente');
      }
      return response.json();
    })
    .then(data => {
      modal.classList.remove('active');
      loadItens();
    })
    .catch(error => {
      console.error('Erro:', error);
      alert("Ocorreu um erro ao cadastrar o cliente");
    });
  }
}

function loadItens() {
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar clientes');
    }
    return response.json();
  })
  .then(data => {
    itens = data;
    tbody.innerHTML = '';
    itens.forEach((item, index) => {
      insertItem(item, index);
    });
  })
  .catch(error => {
    console.error('Erro:', error);
    alert("Ocorreu um erro ao carregar os clientes");
  });
}

loadItens();
