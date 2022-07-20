const API_KEY = "6c80ab05978dfdb27b159b946cc65416";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(3)");
        const temp = document.querySelector("#weather span:nth-child(5)")
        city.innerText = `Location : ${data.name}`;
        weather.innerText = `Weather : ${data.weather[0].main}`;
        temp.innerText = `Temp : ${data.main.temp}ºC`;
    });
}

function onGeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);