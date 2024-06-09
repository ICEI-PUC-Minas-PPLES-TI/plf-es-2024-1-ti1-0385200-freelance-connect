const cardsContainer = document.getElementById("cards");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("candidateForm");

fetch("https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/oportunidades")
    .then(response => response.json())
    .then(oportunidades => {
        oportunidades.reverse().forEach((oportunidade) => {
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
            logoContainer.className = "bg-[#24272D] rounded-lg w-10 h-10 flex items-center justify-center";
            const logo = document.createElement("img");
            logo.src = oportunidade.companyLogo;
            logoContainer.appendChild(logo);
            flexContainer.appendChild(logoContainer);

            const companyInfo = document.createElement("div");
            const companyName = document.createElement("p");
            companyName.textContent = oportunidade.company;
            companyInfo.appendChild(companyName);

            const companyRange = document.createElement("p");
            companyRange.textContent = `${oportunidade.valueMin} - ${oportunidade.valueMax}`;
            companyInfo.appendChild(companyRange);

            flexContainer.appendChild(companyInfo);
            card.appendChild(flexContainer);

            // Botão Candidatar-se
            const applyButton = document.createElement("button");
            applyButton.textContent = "Candidatar-se";
            applyButton.onclick = () => openModal(oportunidade.id);
            card.appendChild(applyButton);

            cardsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function openModal(oportunidadeId) {
    document.getElementById("oportunidadeId").value = oportunidadeId;
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = function(event) {
    event.preventDefault();
    const oportunidadeId = document.getElementById("oportunidadeId").value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const candidato = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    fetch("https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/pessoa", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidato)
        })
        .then(response => response.json())
        .then(newCandidato => {
            fetch(`https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/oportunidades/${oportunidadeId}`)
                .then(response => response.json())
                .then(oportunidade => {
                    if (!Array.isArray(oportunidade.candidatos)) {
                        oportunidade.candidatos = [];
                    }
                    oportunidade.candidatos.push(newCandidato.id);
                    return fetch(`https://2d1e5c41-2dfb-4e60-8f66-9d9cb2674904-00-3gvoqjbh3pz4i.kirk.replit.dev/oportunidades/${oportunidadeId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(oportunidade)
                    });
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    form.reset();

                    document.getElementById("confirmationMessage").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("confirmationMessage").style.display = "none";
                        modal.style.display = "none";
                    }, 3000);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}