document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("addItemForm");
    const modal = new bootstrap.Modal(document.getElementById('dataModal'));

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const img = document.getElementById("itemImage").files[0];
        const nome = document.getElementById("itemName").value;
        const cidade = document.getElementById("itemCity").value;
        const categoria = document.getElementById("itemCategory").value;
        const email = document.getElementById("itemEmail").value;
        const telefone = document.getElementById("itemPhone").value;
        const valor = document.getElementById("itemValue").value;
        const prazoDeEntrega = document.getElementById("itemDeliveryTime").value;
        const descricao = document.getElementById("itemDescription").value;

        const reader = new FileReader();
        reader.onloadend = function() {
            const produto = {
                img: reader.result,
                nome: nome,
                cidade: cidade,
                categoria: categoria,
                email: email,
                telefone: telefone,
                valor: valor,
                prazodeentrega: prazoDeEntrega,
                descricao: descricao,
            };

            fetch('https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/empresas', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(produto)
                })
                .then(response => response.json())
                .then(data => {
                    alert("Perfil adicionado com sucesso!");
                    renderizarProdutos();
                    modal.hide();
                })
                .catch(error => {
                    console.error('Erro ao adicionar o produto:', error);
                    alert("Erro ao adicionar o perfil!");
                });
        };
        if (img) {
            reader.readAsDataURL(img);
        } else {
            alert("Erro no carregamento da imagem!");
        }
    });

    function renderizarProdutos() {
        fetch('https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/empresas')
            .then(response => response.json())
            .then(produtos => {
                let dados = "";
                produtos.reverse().forEach((produto) => {
                    dados += `<div class="col">
                    <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${produto.img}" class="img-fluid rounded-start" alt="Imagem de ${produto.nome}" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${produto.nome}</h5>
                                    <p class="card-text"><b>Categoria:</b> ${produto.categoria}</p>
                                    <p class="card-text"><b>Valor:</b> ${produto.valor}</p>
                                    <p class="card-text"><b>Descrição:</b> ${produto.descricao}</p>
                                    <button class="btn btn-danger" onclick="deleteProduto(${produto.id})">Deletar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                });
                document.getElementById("ofertasid").innerHTML = dados;
            })
            .catch(error => {
                console.error('Erro ao recuperar produtos:', error);
            });
    }

    window.deleteProduto = function(id) {
        fetch(`https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/empresas/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                alert("Produto deletado com sucesso!");
                renderizarProdutos();
            })
            .catch(error => {
                console.error('Erro ao deletar produto:', error);
            });
    }

    renderizarProdutos();
});