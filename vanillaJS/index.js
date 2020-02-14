const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){ 
    title.classList.toggle(CLICKED_CLASS);
    /*
    h1의 id를 활용할때
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    }
    */

    /*
    h1의 id대신에 name으로 할시에
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
    */
}

function init(){ 
    title.addEventListener("click", handleClick);    
}
init();