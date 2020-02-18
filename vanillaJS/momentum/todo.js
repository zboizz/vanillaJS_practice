const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];
//todolist를 추가할때마다 배열에 추가되도록 하고 싶다.
//그전에 toDoObj를 만들어야한다.

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON.stringify는 자바스크립트 object를 string으로 변경시켜줌
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");    
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    //newId라고 하고 값은 toDos길이에 +1값을 준다

    delBtn.innerText="x";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    //삭제버튼을 눌렀을 때 어느 값을 지워야하는지 인식해야하므로
    //li에도 id값을 부여한다.
    li.id = newId;
    //li의 id는 위에서 선언한 newId를 준다.
    //그래서 첫번째 li의 id값은 1이다.

    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);//toDos에 toDoObj를 추가해준다.
    saveToDos(); //순서는 윗줄의 추가코드뒤에, 앞에 한다면 저장을 못함
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

/*function something(toDo){
    console.log(toDo.text);    
}*/

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
       //console.log(loadedToDos);
       //loadedToDos를 불러왔을때 뜨는 값은 string이다.
       //[{"text":"1","id":1},{"text":"2","id":2}]
       //JSON을 다시 사용한다.(javascript Object Notation)
       //데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록
       //object로 바꿔주는 기능 or object에서 string으로
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos);
        //object로 다시 출력되는 것을 확인할 수 있다.

        //forEach
        //기본적으로 함수를 실행하는데 array에 담긴 것들 각각에 한번씩 함수를 실행
        //parsedToDos.forEach(something);  
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
            //각각의 항목에 대해 paintToDo가 발동
        });        
        }        
    }


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();