'use strict'


const criarCard = (carros) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./${carros.imagem}.jpg`
    img.alt = carros.nome

    const info = document.createElement('div')
    info.classList.add('notificacao')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = carros.nome

    const qntTxt = document.createElement('span')
    qntTxt.classList.add('qnt-txt')
    qntTxt.textContent = carros.mensagens

    const texto = document.createElement('c')
    texto.classList.add('texto')
    texto.textContent = carros.texto

    const tempo = document.createElement('c')
    tempo.classList.add('tempo')
    tempo.textContent = carros.tempo


    nomeContainer.appendChild(nome)
    
    info.appendChild(nomeContainer)
    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    info.appendChild(texto)

    nomeContainer.appendChild(qntTxt)
  
    return card

}

const mostrarCards = (carros) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(carros)
    containerChat.appendChild(card)

} 
const usuarios= [

    {
        nome: 'McQueen',
        imagem: 'mcqueen',
        texto: 'Katchau!!',
        tempo: '🟢 Online',
        mensagens: '95',
    },

    {
        nome: 'Doc',
        imagem: 'doc',
        texto: 'Você tem futuro, garoto!',
        tempo: '🔴 Offline',
        mensagens: '51',
    },

    {
        nome: 'The King',
        imagem: 'theking2',
        texto: 'Bela corrida, jovem!',
        tempo: '🔘 Há 3 horas',
        mensagens: '43'
    },

    {
        nome: 'Chick',
        imagem: 'chickhicks',
        texto: 'EU ODEIO O MCQUEEN!',
        tempo: '🔘 Há 8 horas',
        mensagens: '86'
    },

]

usuarios.forEach(mostrarCards)