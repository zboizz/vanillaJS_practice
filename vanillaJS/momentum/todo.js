const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];
//todolist를 추가할때마다 배열에 추가되도록 하고 싶다.
//그전에 toDoObj를 만들어야한다.

//function filterFn(toDo){
    //filter는 마치 forEach에서 function을 실행하는 것과 같이
    //각각의 item과 같이 실행이 됨

    //filter가 하는 것은 모든 아이템을 통해 함수를 실행하고
    //true인 아이템들만 가지고 새로운 array를 만든다.
    //return toDo.id ===1; //1인 값만 array를 만들어 return한다.
    //toDos.filter(function(toDo){ }); 로 밑에서
//}

function deleteTodo(event){
    //todo를 삭제하기 위해서 우선 html을 지우는 function을 만들자.
    //console.log(event.target); //target을 통해 <button>x</button>
    //어떤 버튼이 클릭되었는지 알아내자
    //console.dir(event.target); //dir을 통해 button 출력
    //parentnode가 우리가 찾던 것
    //console.log(event.target.parentNode);//<li id="1">...</li> 출력
    const btn = event.target;
    const li = btn.parentNode;    
    toDoList.removeChild(li);
    //const lli = event.target.parentNode;
    //toDoList.removeChild(lli);

    //html까지는 깔끔하게 삭제가 되지만 localstorage에서까지 삭제는 안됨
    //const cleanToDos = toDos.filter(filterFn);
    //console.log(cleanToDos);

    const cleanToDos = toDos.filter(function(toDo){
        //console.log(toDo.id,li.id); //li.id는 string, toDo.id는 숫자
        //li.id를 숫자로 바꾸어주자 parseInt     
        return toDo.id !== parseInt(li.id);         
    });
    console.log(cleanToDos);
    //(일정3개저장시)삭제버튼을 누르면 cleanToDos는 2개이다.
    //대신 toDos는 3개이다. 이때 toDos에 cleanToDos값을 넣어주자 
    toDos = cleanToDos; // 옛날정보 = 새로운 정보;
    //toDos는 const이기에 바꿀 수 없다. let으로 변경해주자.
    saveToDos();
    //바꾸고 저장한다.
}


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
    delBtn.addEventListener("click", deleteTodo);
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
    //submit을 하면 handleSubmit이라는 함수를 콜백한다.
}
init();