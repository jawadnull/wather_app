const apiKey="56c65760a9fe5f76d02637c652a0f92f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let city= document.querySelector(".city");
let temp =document.querySelector(".temp");
let wind=document.querySelector(".wind");
let humidity=document.querySelector(".humidity");

let search=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");

let weather=document.querySelector(".weather-icon");
let app=document.querySelector(".weather");

async function checkWeather(search){

    const response= await fetch(apiUrl+search+`&appid=${apiKey}`);
    var data= await response.json();

    city.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp) +" °C";
    humidity.innerHTML=data.main.humidity+" %";
    wind.innerHTML=data.wind.speed+=" km/h";

     data.weather.main
    if (data.weather[0].main=="Clouds"){
        weather.src="images/clouds.png";
    }
    else if (data.weather[0].main=="Clear"){
        weather.src="images/clear.png";
    }
    else if (data.weather[0].main=="Rain"){
        weather.src="images/rain.png";
    }
    else if (data.weather[0].main=="Snow"){
        weather.src="images/snow.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        weather.src="images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
        weather.src="images/mist.png";
    }
    

    app.style.display="block";

}


searchBtn.addEventListener("click",()=>{checkWeather(search.value)})