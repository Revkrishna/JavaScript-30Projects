
document.addEventListener("DOMContentLoaded", () => {

const apiKey ="fd6b00e0a174504188b600b5f5b9cb04";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search");
const searchbtn=document.querySelector(".search button");

async function weather(city) {
    const response= await fetch(apiUrl+city + `&appid=${apiKey}`);
    var data= await response.json();

    console.log(data);

    document.querySelector(".city")=data.name;
    document.querySelector(".temp")=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity")=data.main.humidity + "%";
    document.querySelector(".wind")=data.wind.speed +"Km/h";
    
}

searchbtn.addEventListener("click", () => {weather(searchbox.value);
});

});
