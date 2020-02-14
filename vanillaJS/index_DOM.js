const title = document.getElementById("title");
//const title = document.querySelector("#title");

//console.log(title);

title.innerHTML = "Hi! From JS";
console.dir(title);

title.style.color = "red";  //제목 색상 변경
document.title ="I own you now"; //제목 변경됨

//DOM
//Document Object Module

function handResize(){
    console.log("I have been resized");    
}

window.addEventListener("resize", handResize);
//곧바로 호출하는 것이 아니라 윈도우가 resize가 될때 
//handResize라는 이름을 가진 함수를 호출하겠다는 뜻

//window.addEventListener("resize", handResize());
//hanResize()는 당장 호출하겠다는 것

function handleResize2(event){
    console.log(event);    
}
 window.addEventListener("resize", handleResize2);


 function handleClick(){
     title.style.color="green";
 }

 title.addEventListener("click", handleClick);