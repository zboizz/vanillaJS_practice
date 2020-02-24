const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
//캔버스에 그림을 그리기 위하여 ctx를 추가
//canvas는 html의 한 요소인데 context를 가지고 있다.
//그리고 context를 통해서 픽셀에 접근할 수 있는 방법이다.
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);        
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    //console.log(x, y);    
}
function onMouseDown(event){
    //console.log(event);
    painting = true;    
}
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

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);//클릭했을때 발생
    //마우스를 클릭하면 painting이 false가 되고 마우스를 떼면 true가 되도록 한다.
    canvas.addEventListener("mouseup", stopPainting);
    //canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("mouseleave", stopPainting);
}
