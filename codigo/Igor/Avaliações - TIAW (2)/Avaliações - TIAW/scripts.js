//apenas atribuindo variáveis aos elementos que posso interagir
document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('avalia');
  const botaoInicio = document.getElementById('botaoInicio');
  const fechaModal = document.getElementsByClassName('fecha')[0];
  const stars = document.querySelectorAll('.star');
  let qntEstrelas = 0;

  // Ao clicar no botão início, eu faço com que o modal apareça por meio do Style Flex
  botaoInicio.onclick = function() {
      modal.style.display = "flex";
  }

  // O contrário para que, caso eu clique no X, o modal feche por meio do Style None
  fechaModal.onclick = function() {
      modal.style.display = "none";
  }

  // Ao clicar fora do modal ( na janela inicial ), o modal também fecha por meio do Style None
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

//
  stars.forEach(star => {
      star.addEventListener('click', function() {
          qntEstrelas = this.getAttribute('data-value');
          stars.forEach(s => s.classList.remove('selected'));
          this.classList.add('selected');
          highlightStars(qntEstrelas);
      });

// Um "observador de evento" é adicionado para que, ao passar o mouse por cima da estrela, ela chama outra função para marcá-la
      star.addEventListener('mouseover', function() {
          const rating = this.getAttribute('data-value');
          highlightStars(rating);
      });

// O inverso da func a cima para que a estrela seja apague por meio da variável "qntEstrelas", que recebe 0 ( false ) em seu valor
      star.addEventListener('mouseout', function() {
          highlightStars(qntEstrelas);
      });
  });

//
  function highlightStars(rating) {
      stars.forEach(star => {
          star.style.color = (star.getAttribute('data-value') <= rating) ? '#ffcc00' : '#ddd';
      });
  }

  //Pega o valor deixado dentro da caixa "comentários" e qual estrela foi marcada para disparar um allert de aviso

  //                                                ATENÇÃO !!!
  // PARA QUE O JSON FUNCIONE, ABRA O SEGUINTE LINK NA WEB: https://1b0c7226-e4b5-4efa-a522-918cb2deae1d-00-1w55plc3ivn2u.kirk.replit.dev/avaliacoes
  // EM SEGUIDA, CLIQUE EM "view on replit.com"
  // VÁ AO ARQUIVO "index.js" E CLIQUE NO BOTÃO "RUN".

  document.getElementById('envia').onclick = async function() {
      const comentario = document.getElementById('comentario').value;

      await fetch("https://1b0c7226-e4b5-4efa-a522-918cb2deae1d-00-1w55plc3ivn2u.kirk.replit.dev/avaliacoes", {
            method: "post",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({ 
                "empresa": "Nome de empresa fictícia",
                "nota": (qntEstrelas),
                "comentario": (comentario), })
        }).then(() => {
            alert(`Avaliação enviada!\nEstrelas: ${qntEstrelas}\nComentário: ${comentario}`);
            modal.style.display = "none";       
        }).catch(() => {
            alert(`Erro no registro!`)
        })

  }
});