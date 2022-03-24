document.getElementById('resto').style.display = 'none'
document.getElementById('play').style.display = 'none'


document.onkeydown = teclado
var player = document.getElementById('player')


var velocidade = 60
var px = 0
var py = 0

console.log('px: ' + px + '  -----    py: ' + py)

function teclado(e){
    if (e.keyCode === 65 || e.keyCode === 37){
        px--
    } else if (e.keyCode === 87 || e.keyCode === 38){
        py--
    } else if (e.keyCode === 68 || e.keyCode === 39){
        px++
    } else if (e.keyCode === 83 || e.keyCode === 40){
        py++
    }

    moveDown();
    

    console.log(`px: ${px} ---------- py: ${py}` )
}

function moveDown(){
    player.style.right = px * velocidade + 'px' 
    player.style.left = px * velocidade + 'px'

    player.style.top = py * velocidade + 'px'
    player.style.bottom = py * velocidade + 'px'
}


// script ataques



var boxRed = document.getElementById('container-armys')

var box1 = document.getElementById('box-1')
var box2 = document.getElementById('box-2')
var box3 = document.getElementById('box-3')
var box4 = document.getElementById('box-4')
var boxa = document.getElementById('box-a')
var boxb = document.getElementById('box-b')
var boxc = document.getElementById('box-c')
var boxd = document.getElementById('box-d')

var dificuldade = 0

document.getElementById('easy').addEventListener('click', ()=>{
    reloadProbality()
    atackTwo()
    dificuldade = '2.3s';

    document.getElementById('easy').style.backgroundColor = 'green'
    document.getElementById('hard').style.backgroundColor = 'white'
    document.getElementById('alek').style.backgroundColor = 'white'
})

document.getElementById('hard').addEventListener('click', ()=>{
    dificuldade = '1.2s';
    reloadProbality()
    atackTwo()
    
    document.getElementById('easy').style.backgroundColor = 'white'
    document.getElementById('hard').style.backgroundColor = 'green'
    document.getElementById('alek').style.backgroundColor = 'white'
})

document.getElementById('alek').addEventListener('click', ()=>{
    dificuldade = '0.6s'; 
    reloadProbality()
    atackTwo()
    
    document.getElementById('easy').style.backgroundColor = 'white'
    document.getElementById('hard').style.backgroundColor = 'white'
    document.getElementById('alek').style.backgroundColor = 'green'
})






    var timer = setInterval(reloadProbality, 2000)
    var timer2 = setInterval(atackTwo, 2500)


function reloadProbality(){
    var probality = Math.random()

    if (probality <= 0.25){
        box1.style = `animation-name: box1; animation-duration: ${dificuldade};`
    } else if(probality <=0.50 && probality >= 0.25){
        box2.style = `animation-name: box2; animation-duration: ${dificuldade};`
    } else if (probality >= 0.50 && probality <= 0.75){
        box3.style = `animation-name: box3; animation-duration: ${dificuldade};`
    } else{
        box4.style = `animation-name: box4; animation-duration: ${dificuldade};`
    }

    
}

function atackTwo(){
    let probality = Math.random()

    if (probality <= 0.25){
        boxa.style = `animation-name: boxa; animation-duration: ${dificuldade};`
    } else if(probality <=0.50 && probality >= 0.25){
        boxb.style = `animation-name: boxb; animation-duration: ${dificuldade};`
    } else if (probality >= 0.50 && probality <= 0.75){
        boxc.style = `animation-name: boxc; animation-duration: ${dificuldade};`
    } else{
        boxd.style = `animation-name: boxd; animation-duration: ${dificuldade};`
    }

}


// animação tutorial


 document.getElementById('proximo1').addEventListener('click', function(){
     document.getElementById('box-info').style.display = 'none'

     document.getElementById('box-info2').style.display = 'flex'
 })

 document.getElementById('proximo2').addEventListener('click', function(){
     document.getElementById('box-info2').style.display = 'none'
     document.getElementById('play').style.display = 'flex'
     document.getElementById('resto').style.display = 'none'
 })


    //  document.getElementById('resto').style.display = 'flex'


















