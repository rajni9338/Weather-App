// api key : 7daf85cc6564a6fbc91d40ada353c659

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather_icon");
const tempElement = document.querySelector(".temperature_value");
const descElement = document.querySelector(".temperature_description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

//App data
const weather = {};

weather.temperature = {
    unit: "celsius"
}

//APP CONSTS AND VARS
const KELVIN = 273;
//API KEY
const key = "3a4232b9ef5215d652992c7d19e94a35";

//CHECK IF BROWSE SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);   
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browse does not support Geolocation</p>";
}

//SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = error.message;
}

//GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
        let api = 'http://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={key}';

    console.log(api);
}