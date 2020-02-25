const canvas = document.getElementById("jsCanvas");
//https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D
const colors = document.getElementsByClassName("jsColor");//붓색깔
const range = document.getElementById("jsRange");//굵기
const mode = document.getElementById("jsMode");//fill
const ctx = canvas.getContext("2d");
//캔버스에 그림을 그리기 위하여 ctx를 추가
//canvas는 html의 한 요소인데 context를 가지고 있다.
//그리고 context를 통해서 픽셀에 접근할 수 있는 방법이다.
canvas.width = 700; //css에서 크기를 지정해놨지만 꾸며주는 크기 말고 본체의 크기를 지정해주어야함
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"; //그릴 선들의 기본적인 색깔을 지정
ctx.lineWidth = 2.5; //선들의 기본 굵기

let painting = false;
let filling = false; 
//fill을 눌렀을 때 painting이 되고 painting을 눌렀을때 fill이 되야함

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    //console.log(event);
    //여러가지 값을 얻을 수 있지만 그림판을 위해서 실제로 필요한 값은
    //offsetX 와 offsetY의 값이다.(캔버스내의 모든 움직임을 잡을 수 있다.)
    //clientX,Y는 전체 윈도우에서의 마우스 위치
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){//마우스를 누르고 있지않을때에는 path를 만든다.
        ctx.beginPath(); //path는 선
        ctx.moveTo(x, y); 
    }else{//마우스를 누르고 있을때에는 line을 만들고 stroke를 통해서 획이 그어진다.
        ctx.lineTo(x, y);
        ctx.stroke();//현재의 sub-path를 현재의 stroke style로 획을 그음
    }

    //console.log(x, y);    
}
/*
function onMouseDown(event){
    //console.log(event);
    painting = true;    
}
*/
/*
function onMouseUp(event){
    stopPainting();
}
*/
/*
function onMouseLeave(event){
    painting = false;
}
*/

function handleColorClick(event){
    //console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    //console.log(color);
    ctx.strokeStyle = color;
    
}

function handleRangeChange(event){
    //console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
    
}
function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill"
    }else{
        filling = true;
        mode.innerText = "Paint"
    }
    
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);//클릭했을때 발생
    //마우스를 클릭하면 painting이 false가 되고 마우스를 떼면 true가 되도록 한다.
    canvas.addEventListener("mouseup", stopPainting);
    //canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("mouseleave", stopPainting);
}

//console.log(colors);
//HTMLCollection이 출력됨, 원하는 것은 array이기때문에 array를 뽑아줌
//console.log(Array.from(colors));
//getelement를 통해서 받아온 colors를 array.from을 통해서 array형식으로 잘 뽑아옴.

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
//클릭하면 나오는 array중 backgroundColor가 필요한 정보
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Syntax

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}