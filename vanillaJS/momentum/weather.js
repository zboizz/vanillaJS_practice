const weather = document.querySelector(".js-weather");

const API_KEY = "254bf291fd1be0e34062c045f46e053f";
//API(Application Programming Interface)
//다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단
const COORDS = "coords";

function getWeather(lat, lon){
    //데이터를 얻기위해서는 fetch를 사용하면 된다.
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            ).then(function(response){
            return response.json();
            })
            .then(function(json){
                const temp = json.main.temp;
                const place = json.name;
                weather.innerText = `${temp} @ ${place}`;
            });
            //then: 데이터가 넘어왔을 때 함수가 호출됨
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    //console.log(position.coords.latitude);     
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;  
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position){
    console.log("cant access geo location");      
}


//좌표를 요청하는 기능
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    //getCurrentPosition(성공했을때, 실패했을때, 옵션);

}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        //console.log(parseCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        
    }
}

function init(){
    loadCoords();
}

init();