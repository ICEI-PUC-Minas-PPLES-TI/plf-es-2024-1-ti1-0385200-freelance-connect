const apiUrl = 'https://a30fb24e-1ca4-4c36-b900-88a65b8f2d72-00-12mrbsq9q452a.kirk.replit.dev/empresas';


function displayMessage(mensagem) {
    const msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readContato(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler clientes via API JSONServer:', error);
            displayMessage("Erro ao ler clientes");
        });
}

function createContato(contato, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contato),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Contato inserido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir contato via API JSONServer:', error);
            displayMessage("Erro ao inserir contato");
        });
}

function updateContato(id, contato, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contato),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Contato alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar contato via API JSONServer:', error);
            displayMessage("Erro ao atualizar contato");
        });
}

function deleteContato(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Contato removido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover contato via API JSONServer:', error);
            displayMessage("Erro ao remover contato");
        });
}

function validarCadastro() {
    const nome = document.getElementById('NomeCliente').value;
    const telefone = document.getElementById('TelefoneCliente').value;
    const email = document.getElementById('EmailCliente').value;
    const cnpj = document.getElementById('CNPJCliente').value;
    const senha = document.getElementById('SenhaCliente').value;
    const confirmarSenha = document.getElementById('PasswordConfirmation').value;

    if (senha !== confirmarSenha) {
        displayMessage("As senhas não coincidem!");
        return;
    }

    const contato = {
        nome: nome,
        telefone: telefone,
        email: email,
        cnpj : cnpj,
        senha: senha
    };

    createContato(contato, () => {
        document.getElementById('formCadastro').reset(); 
        window.location.href = "./tabelaCRUD.html"; 
    });
}
