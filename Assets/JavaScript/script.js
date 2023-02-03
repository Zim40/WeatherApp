window.onload = function (){
var apiKey = "2c3ba4a73398f4ad9d8954ec20141c02";
var cityName = document.getElementById('cityInput');
var submit = document.getElementById('citySubmit');

console.log(cityName);
console.log(submit);

forecastCity = "";

getWeather();
fiveDayForecast();
function getWeather (){
  submit.addEventListener('click', ()=>{
    let city = cityName.value;
    
    console.log(city);
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apiKey)
    .then(response => response.json())
    .then(data=> {
        console.log(data);
        var lat = data.coord.lat;
        var lon = data.coord.lon
        console.log(lat);
        console.log(lon);
        // Adds City Name to the card title for current weather 
      let currentCityWeather = document.querySelector('.card-title');
      currentCityWeather.textContent = data.name;
      // Adds current temp 
      let currentTemp = document.querySelector('.tempNow');
      currentTemp.textContent = 'Current Temp - ' + data.main.temp;
      // Adds weather icon for current temp 
      let weatherIcon = document.getElementById('currentImg');
      let icon = data.weather[0].icon;
      console.log(icon);
      let iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      weatherIcon.src = iconUrl;
      // Add datas to cards
      let currentDt = data.dt;
      let date = new Date(currentDt*1000);
      let formattedDate = date.toLocaleDateString();
      console.log(formattedDate);
      let dateBox = document.querySelector('.currentDate');
      dateBox.textContent = formattedDate;
      
    }
    )
    .catch(error => {
      console.log(error);
    })

  })
  }

  function fiveDayForecast(){
        submit.addEventListener('click', ()=>{
          const city = cityName.value;
          fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid='+apiKey)
          .then(response => response.json())
          .then (data => {
            console.log(data);
            console.log(data.list[8].dt);
            console.log(data.list[16].dt);
            console.log(data.list[24].dt);
            console.log(data.list[32].dt);
            const Days = {
              day1: data.list[0].dt,
              day2: data.list[8].dt,
              day3: data.list[16].dt,
              day4: data.list[24].dt,
              day5: data.list[32].dt,
              
            };
           
           
            // NOT WORKING YET - CREATING ICONS FOR WEATHER BOXES
            const cardDates = document.querySelectorAll('.cardDate');
            for (var i = 0; i < cardDates.length; i++){
              const current = Days[Object.keys(Days)[i]];
              let date = new Date(current * 1000);
              let formattedDate =date.toLocaleDateString();
              cardDates[i].textContent = formattedDate;
            }
            const forecastIcon = document.createElement('img');
            forecastIcon.className += ("Icons");
            icons = data.list[i].weather[0].icon;
            const iconsUrl = "https://openweathermap.org/img/wn/"+icons+"@2x.png";
            forecastIcon.src = iconsUrl;
            forecastIcon.append(cardDates);
            
          })
        })
  }
}























