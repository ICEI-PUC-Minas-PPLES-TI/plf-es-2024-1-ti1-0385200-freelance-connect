const apiUrl = 'https://b215e3bf-c7d0-4b2f-8947-c817ea631de2-00-3o6jv38wc025s.spock.replit.dev/clientes';

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
        senha: senha
    };

    createContato(contato, () => {
        document.getElementById('formCadastro').reset(); 
        window.location.href = "./tabelaCRUD.html"; 
    });
}
