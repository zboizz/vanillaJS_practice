const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image); //잘뜨지만 너무 크게 나옴    
    
    
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}

init();