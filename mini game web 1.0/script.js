var player2 = document.getElementById('player')
var resto = document.getElementById('resto')
var play =  document.getElementById('play')

document.getElementById('sofia').addEventListener('click', selectSofia)

function selectSofia(){
    var playSofia = document.createElement('img')
    playSofia.src = './img/sofia.webp'
    player2.appendChild(playSofia)
    resto.style.display = 'flex'
    play.style.display = 'none'
    playSofia.setAttribute('class', 'desgner-play')
    playSofia.setAttribute('id', 'player')

}

document.getElementById('alek-play').addEventListener('click', selectAlek)

function selectAlek(){
    var playAlek = document.createElement('img')
    playAlek.src = "./img/alek2.jpg"
    player2.appendChild(playAlek)

    resto.style.display = 'flex'
    play.style.display = 'none'
    playAlek.setAttribute('class', 'desgner-play')
    playAlek.setAttribute('id', 'player')
    
}

document.getElementById('cavaleiro').addEventListener('click', selectCa)

function selectCa(){
    var playerCa = document.createElement('img')
    playerCa.src = "./img/s.jpg"
    player2.appendChild(playerCa)

    resto.style.display = 'flex'
    play.style.display = 'none'
    playerCa.setAttribute('class', 'desgner-play')
    playerCa.setAttribute('id', 'player')
}



