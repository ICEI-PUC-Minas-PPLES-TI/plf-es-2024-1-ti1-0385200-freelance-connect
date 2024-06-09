document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.getElementById("cardsContainer");
    const novaOportunidadeBtn = document.getElementById("novaOportunidadeBtn");
    const novaOportunidadeModal = document.getElementById("novaOportunidadeModal");
    const editarOportunidadeModal = document.getElementById("editarOportunidadeModal");
    const verCandidatosModal = document.getElementById("verCandidatosModal");
    const closeModalButtons = document.querySelectorAll(".close");

    const novaOportunidadeForm = document.getElementById("novaOportunidadeForm");
    const editarOportunidadeForm = document.getElementById("editarOportunidadeForm");
    const candidatosContainer = document.getElementById("candidatosContainer");

    const apiUrl = "https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/oportunidades";
    const pessoasApiUrl = "https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/pessoa";

    novaOportunidadeBtn.addEventListener("click", () => {
        novaOportunidadeModal.style.display = "block";
    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            novaOportunidadeModal.style.display = "none";
            editarOportunidadeModal.style.display = "none";
            verCandidatosModal.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target == novaOportunidadeModal) {
            novaOportunidadeModal.style.display = "none";
        }
        if (event.target == editarOportunidadeModal) {
            editarOportunidadeModal.style.display = "none";
        }
        if (event.target == verCandidatosModal) {
            verCandidatosModal.style.display = "none";
        }
    });

    novaOportunidadeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const oportunidade = {
            title: document.getElementById("title").value,
            tags: document.getElementById("tags").value.split(",").map(tag => tag.trim()),
            company: document.getElementById("company").value,
            companyLogo: document.getElementById("companyLogo").value,
            valueMin: document.getElementById("valueMin").value,
            valueMax: document.getElementById("valueMax").value,
            candidatos: [] // Adiciona o campo candidatos como um array vazio
        };
        fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(oportunidade)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                novaOportunidadeModal.style.display = "none";
                loadOportunidades();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    editarOportunidadeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const oportunidadeId = document.getElementById("editId").value;
        const oportunidade = {
            title: document.getElementById("editTitle").value,
            tags: document.getElementById("editTags").value.split(",").map(tag => tag.trim()),
            company: document.getElementById("editCompany").value,
            companyLogo: document.getElementById("editCompanyLogo").value,
            valueMin: document.getElementById("editValueMin").value,
            valueMax: document.getElementById("editValueMax").value
        };
        fetch(`${apiUrl}/${oportunidadeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(oportunidade)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                editarOportunidadeModal.style.display = "none";
                loadOportunidades();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    function loadOportunidades() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(oportunidades => {
                cardsContainer.innerHTML = "";
                oportunidades.reverse().forEach(oportunidade => {
                    const card = document.createElement("div");
                    card.className = "card";

                    const cardTitle = document.createElement("h4");
                    cardTitle.className = "card__title";
                    cardTitle.textContent = oportunidade.title;
                    card.appendChild(cardTitle);

                    const cardBadges = document.createElement("div");
                    cardBadges.className = "card__badges";
                    oportunidade.tags.forEach((tag) => {
                        const badge = document.createElement("span");
                        badge.className = "card__badge";
                        badge.textContent = tag;
                        cardBadges.appendChild(badge);
                    });
                    card.appendChild(cardBadges);

                    const cardValues = document.createElement("div");
                    const valueMin = document.createElement("span");
                    valueMin.className = "card__value";
                    valueMin.textContent = oportunidade.valueMin;
                    cardValues.appendChild(valueMin);

                    const dash = document.createElement("span");
                    dash.textContent = " - ";
                    cardValues.appendChild(dash);

                    const valueMax = document.createElement("span");
                    valueMax.className = "card__value";
                    valueMax.textContent = oportunidade.valueMax;
                    cardValues.appendChild(valueMax);

                    card.appendChild(cardValues);

                    const flexContainer = document.createElement("div");
                    flexContainer.className = "flex items-center gap-3";

                    const logoContainer = document.createElement("div");
                    logoContainer.className = "logo-container";
                    const logo = document.createElement("img");
                    logo.src = oportunidade.companyLogo;
                    logoContainer.appendChild(logo);
                    flexContainer.appendChild(logoContainer);

                    const companyInfo = document.createElement("div");
                    const companyName = document.createElement("p");
                    companyName.textContent = oportunidade.company;
                    companyInfo.appendChild(companyName);

                    const companyRange = document.createElement("p");
                    companyRange.textContent = `${ oportunidade.valueMin } - ${ oportunidade.valueMax }`;
                    companyInfo.appendChild(companyRange);

                    flexContainer.appendChild(companyInfo);
                    card.appendChild(flexContainer);

                    // Botão Editar
                    const editButton = document.createElement("button");
                    editButton.textContent = "Editar";
                    editButton.onclick = () => openEditModal(oportunidade);
                    card.appendChild(editButton);

                    // Botão Ver Candidatos
                    const viewCandidatesButton = document.createElement("button");
                    viewCandidatesButton.textContent = "Ver Candidatos";
                    viewCandidatesButton.onclick = () => openViewCandidatesModal(oportunidade.candidatos);
                    card.appendChild(viewCandidatesButton);

                    // Botão Deletar
                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "Deletar";
                    deleteButton.onclick = () => deleteOportunidade(oportunidade.id);
                    card.appendChild(deleteButton);

                    cardsContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function openEditModal(oportunidade) {
        document.getElementById("editId").value = oportunidade.id;
        document.getElementById("editTitle").value = oportunidade.title;
        document.getElementById("editTags").value = oportunidade.tags.join(", ");
        document.getElementById("editCompany").value = oportunidade.company;
        document.getElementById("editCompanyLogo").value = oportunidade.companyLogo;
        document.getElementById("editValueMin").value = oportunidade.valueMin;
        document.getElementById("editValueMax").value = oportunidade.valueMax;
        editarOportunidadeModal.style.display = "block";
    }

    function openViewCandidatesModal(candidatos) {
        candidatosContainer.innerHTML = "";
        if (candidatos.length === 0) {
            candidatosContainer.innerHTML = "<p>Nenhum candidato para esta oportunidade.</p>";
        } else {
            candidatos.forEach(id => {
                fetch(`${pessoasApiUrl}/${id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch candidate with ID ${id}`);
                        }
                        return response.json();
                    })
                    .then(candidato => {
                        const candidatoElement = document.createElement("div");
                        candidatoElement.className = "candidato";
                        candidatoElement.innerHTML = `
                <p><strong>Nome:</strong> ${candidato.nome}</p>
                <p><strong>Email:</strong> ${candidato.email}</p>
                <p><strong>Telefone:</strong> ${candidato.telefone}</p>
              `;
                        candidatosContainer.appendChild(candidatoElement);
                    })
                    .catch(error => console.error('Error fetching candidato:', error));
            });
        }
        verCandidatosModal.style.display = "block";
    }

    function deleteOportunidade(oportunidadeId) {
        if (confirm("Tem certeza que deseja deletar esta oportunidade?")) {
            fetch(`${apiUrl}/${oportunidadeId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        loadOportunidades();
                    } else {
                        throw new Error('Failed to delete opportunity');
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }

    // Carregar oportunidades ao carregar a página
    loadOportunidades();
});