const tituloInput = document.getElementById('titulo-card');
const descricaoInput = document.getElementById('descricao');
const imagemInput = document.getElementById('url');
const botao = document.getElementById('submit');
const secao = document.querySelector('.cards');
const resetar = document.getElementById('resetar')

function adicionarCard(){
  const titulo = tituloInput.value;
  const descricao = descricaoInput.value;
  const imagem = imagemInput.value;
    
  if(!titulo || !descricao || !imagem){
    alert('preencha todos os campos')
  } else {
  const novoCard = document.createElement('div');
   
  novoCard.innerHTML =  `<div class="card">  
                          <img src="${imagem}">
                          <h1>${titulo}</h1>
                          <p>${descricao}</p>
                        </div>`; 
  secao.appendChild(novoCard);
  limparCampos();
  }
}

function limparCampos() {
  document.querySelector("form").reset();
}
  
botao.addEventListener('click', (event) => {
  adicionarCard();
  event.preventDefault();
});


resetar.addEventListener('click', event => {
  secao.innerHTML = ``
})
