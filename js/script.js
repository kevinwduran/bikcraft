// Ativar os Links Menu
const links = document.querySelectorAll('.header-menu a')

function ativar_link(link){
    const url = location.href// links da página que está
    const href = link.href// links de todas as páginas dentro de header-menu a

    if(url.includes(href)){// se href estiver incluido em url, então...
        link.classList.add('ativo') //add a classe ativo a link
    }
}

links.forEach(ativar_link) // PARA CADA um dos links ativar o ativar_link

//--------------------------------------------------------------

// Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search) // o location mostra várias coisas dentre elas o search que é o link que foi adicionado: ?servico&produto=prata | utilizei o new URL... para pegar esse link

function ativarProduto(parametro){ //
    const elemento = document.getElementById(parametro) //pegou o parametro seja ouro ou prata
    if (elemento) { // checa se elemento existe
        elemento.checked = true // aqui ele chegou altomaticamente ouro ou prata em serviços
    }   
    console.log(elemento) 
}

parametros.forEach(ativarProduto)

//--------------------------------------------------------------

//Perguntas Frequentes

const perguntas = document.querySelectorAll('dt button')

function ativarPergunta(event){
    const pergunta = event.currentTarget // pega a pergunta que você clicou, ex: cliquei na pergunta 1, mostra toda a estrutura da 1
    const controls = pergunta.getAttribute("aria-controls") // pegou o que está dentro de aria-controls na estrura da pergunta inteira

    const resposta = document.getElementById(controls)// pegou o dd de acordo com o controls, ou seja, pode ser qualquer uma das perguntas, quando clicar na 1a mostrará a 1a dd

    resposta.classList.toggle('ativa') // add ativa nas classes
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa)
}

function eventoPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventoPerguntas)

//--------------------------------------------------------------

// Galeria de Bicicletas (clicar na imagem e expandi-la)

const galeria = document.querySelectorAll('.bicicleta-imagem img')
const galeriaContainer = document.querySelector('.bicicleta-imagem')

function trocarImagem(event){
    const img = event.currentTarget    
    const media = matchMedia('(min-width:1000px)').matches // vê se o min-width é menor que 1000px
    if (media){ // se é menor de 1000px fazer, senão não
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)

//--------------------------------------------------------------

// Animação
if(window.SimpleAnime){
    new SimpleAnime()
}
