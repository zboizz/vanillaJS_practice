const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    //title.style.color = "red";
    //console.log(title.style.color);    
    const currentColor = title.style.color;
    //console.log(currentColor);
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
    
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
    //마우스가 들어갈때마다
}
init();

//MDM


function handleOffline(){
    console.log("lalalal");
    
}

function handleOnline(){
    console.log("welcome back");
    
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

