//array
const monday ="Mon";
const tuesday ="Tue";
const wednesday ="Wed";
const thursday ="Thu";
const friday ="Fri";


const dayOfWeek=["Mond", "Tue", "Wed", "Thu",
                "Fri", "Sat", "Sun"];

console.log(dayOfWeek);
console.log(dayOfWeek[3]);     


//Object
const Info ={ name:"boy", age:"22", gender:"male", isgood:true,
            FavFruit: ["apple","banana","orange"],
            FavFood:[
                {name:"pork", price:"low"},
                {name:"beef" , price:"high",}
                    ]
            }
console.log(Info);

console.log(Info.gender);

Info.gender = "Female"

console.log(Info.gender);
//const안에 있는 data 값은 변경 가능하다, 자체를 바꾸는 것은 안됨
console.log(Info.FavFood[1].name);