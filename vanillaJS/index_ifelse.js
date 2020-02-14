if(10 === 5){
    console.log('hi');    
}else{
    console.log('ho');    
}
const mention = document.getElementById("mention");
const title = document.getElementById("title");
const age = prompt("How old are you?");

if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
    mention.innerHTML="you should not"
}else if(age>21){
    console.log("go ahead");
    title.innerHTML ="go ahead";
    mention.innerHTML="go ahead";
}else{
    console.log("too young");
    mention.innerHTML="go home";
}
