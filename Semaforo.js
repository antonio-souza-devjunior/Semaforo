const buttons = document.getElementById("buttons");
const Img = document.getElementById("img");
const colors = ['red','amarelo','verde'];
let indexColor=0;
let cor;
let intervalId;

const nextColor = ( event ) => {
    stopAutomatic();
    Imagens[event.target.id]();
}

const nextIndex = () => {
    indexColor = indexColor < 2? ++indexColor:0;
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const changeColor = () => {
        cor = colors[indexColor];
        Imagens[cor]();
        nextIndex();
    
}

const Imagens = {
    'red': () => {Img.src = "imagens/vermelho.png"},
    'amarelo': () => {Img.src = "imagens/amarelo.png"},
    'verde': () => {Img.src = "imagens/verde.png"},
    'automatic': () => {intervalId = setInterval(changeColor, 1000)}
}

buttons.addEventListener("click",nextColor);