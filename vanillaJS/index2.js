function sayHello(){
    console.log('Hello!');    
}

sayHello();

function sayHi(name){
    console.log('Hi', name);    
}

sayHi("friends!");
//sayHi라는 함수의 () 안에 들어갈 내용은 argument(인자)라고 한다.
//인자의 이름을 name라고 정한다.
//sayHi(); 함수를 호출할 때 인자값을 넣어준다. sayHi("friends")
//함수가 호출될때 받은 인자를 sayHi(name)라는 인자에 들어간다.
//console.log(name); 를 인출할때 name에 들어있는 friends가 출력된다.

function saybye(name, goodbye){
    console.log("Hey,",name, goodbye);    
}

saybye("may", "see you soon");
saybye("tiger","good bye!!");

function Hello(name, age){
    return `Hello ${name} you are ${age} years old`;    
}

console.log(Hello("John",17));

const greeting = Hello("kevin",23);
console.log(greeting);

const calculator = {
    plus: function(a,b){
        return a+b;
    }, minus: function(a,b){
        return a-b;
    }, multi: function(a,b){
        return a*b;
    }, div: function(a,b){
        return a/b;
    }
}
const plus = calculator.plus(2,7);
console.log(plus);

const minus = calculator.minus(7,1);
console.log(minus);

const multi = calculator.multi(4,5);
console.log(multi);

const div = calculator.div(10,2);
console.log(div);





