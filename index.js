let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain3 = document.getElementById('mountain3')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mountain7 = document.getElementById('mountain7')
let PandaMH = document.querySelector('.PandaMH')

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value *3+ 'px';
    PandaMH.style.fontSize = value + 'px';
    if(value >= 62){
        PandaMH.style.fontSize = 62 + 'px';
        PandaMH.style.position = 'fixed';
        if(value >= 400){
            PandaMH.style.display = 'none';
        }else{
            PandaMH.style.display = 'block';
        }
    if(value >= 88){
        document.querySelector('.main').style.background = "linear-gradient(rgb(43 120 124),rgb(24, 2, 18))"
    }else{
        document.querySelector('.main').style.background = "linear-gradient(rgb(90, 26, 63),rgb(24, 2, 18))"
    }
    }
    
}
