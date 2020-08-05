const btns = document.querySelectorAll('.btn');

btns.forEach( btn=> {
    btn.addEventListener('click', ()=>{
        playMusic(btn)
    })
})

function playMusic(btn){
    if (btn.classList.contains('green')){
        var green = new Audio('./sounds/green.mp3');
        green.play();
    } else if (btn.classList.contains('red')){
        var red = new Audio('./sounds/red.mp3');
        red.play();
    } else if (btn.classList.contains('blue')){
        var blue = new Audio('./sounds/blue.mp3');
        blue.play();
    } else if (btn.classList.contains('yellow')){
        var yellow = new Audio('./sounds/yellow.mp3');
        yellow.play();
    }
}