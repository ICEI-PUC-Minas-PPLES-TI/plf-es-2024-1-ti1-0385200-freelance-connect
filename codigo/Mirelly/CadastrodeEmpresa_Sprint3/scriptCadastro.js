const apiFreelancerUrl = 'https://b215e3bf-c7d0-4b2f-8947-c817ea631de2-00-3o6jv38wc025s.spock.replit.dev/clientes'; // Substitua pela URL da API de Freelancer
const apiEmpresaUrl = 'https://a30fb24e-1ca4-4c36-b900-88a65b8f2d72-00-12mrbsq9q452a.kirk.replit.dev/empresas';

function displayMessage(mensagem) {
    const msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function createContato(apiUrl, contato, refreshFunction) {
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
        cnpj: cnpj,
        senha: senha
    };

    const freelancerTab = document.getElementById('freelancerTab');
    const empresaTab = document.getElementById('empresaTab');

    let apiUrl;
    if (freelancerTab.classList.contains('active')) {
        apiUrl = apiFreelancerUrl;
    } else if (empresaTab.classList.contains('active')) {
        apiUrl = apiEmpresaUrl;
    }

    createContato(apiUrl, contato, () => {
        document.getElementById('formCadastro').reset();
        window.location.href = "./tabelaCRUD.html";
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const freelancerTab = document.getElementById('freelancerTab');
    const empresaTab = document.getElementById('empresaTab');
    const cnpjField = document.getElementById('CNPJCliente').parentElement;
    const msgDiv = document.getElementById('textomotivacional');

    freelancerTab.addEventListener('click', function (e) {
        e.preventDefault();
        cnpjField.style.display = 'none';
        msgDiv.innerHTML = '<p class="mt-4 leading-relaxed text-gray-500">Faça parte da nossa comunidade de freelancers e explore novas oportunidades. Registre-se agora e mergulhe em ótimos projetos!</p>';
        freelancerTab.classList.add('active');
        empresaTab.classList.remove('active');
    });

    empresaTab.addEventListener('click', function (e) {
        e.preventDefault();
        cnpjField.style.display = 'block';
        msgDiv.innerHTML = '<p class="mt-4 leading-relaxed text-gray-500">Faça parte da nossa plataforma e conecte-se com talentos excepcionais para impulsionar o crescimento da sua empresa. Registre-se agora e descubra profissionais qualificados prontos para transformar suas ideias em realidade!</p>';
        freelancerTab.classList.remove('active');
        empresaTab.classList.add('active');
    });
});
