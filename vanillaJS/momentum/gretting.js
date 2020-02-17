const form = document.querySelector(".js-form"),
//querySelect는 첫번째로 찾은 값만 가져온다.
input = form.querySelector("input"), //input한 값
greeting = document.querySelector(".js-greetings");

const USER_LS="currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault(); //기본 동작을 막음
    const currentValue = input.value; //currentValue가 input한 값이 됨
    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName() {
    form.classList.add(SHOWING_CN); 
    form.addEventListener("submit",handleSubmit)   
}



function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//local storage: 작은 정보를 유저 컴퓨터에 저장하는 방법
//검사-어플리케이션-local storage
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
        askForName();
    }else{
        //she is
        paintGreeting(currentUser);

    }
}


function init(){
    loadName();
}

init();