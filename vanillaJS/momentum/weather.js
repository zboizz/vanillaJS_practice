const COORDS = 'coords';

function handleGeoSucces(position){
    //console.log(position.coords.latitude);  
      
}

function handleGeoError(position){
    console.log("cant access geo location");  
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;  
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
}


//좌표를 요청하는 기능
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    //getCurrentPosition(성공했을때, 실패했을때, 옵션);

}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();