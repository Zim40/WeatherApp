var apiKey = "2c3ba4a73398f4ad9d8954ec20141c02";





let cityName = document.querySelector('.textInput');
let searchBtn = document.querySelector('.submitSearch');
let latitude = [];
let longitude = [];
let userUrl = [];


searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let userCity = cityName.value;
    let Url = "http://api.openweathermap.org/geo/1.0/direct?q="+userCity+"&limit=1&appid=2c3ba4a73398f4ad9d8954ec20141c02";
    latitude = [];
    longitude = [];
    fetch(Url)
    .then(response => response.json())
    .then(data =>  {
        for(var i=0; i < data.length; i++) {
        console.log(data[0].lat, data[0].lon, "Just making sure we are working correctly");
        latitude.push(data[0].lat);
        longitude.push(data[0].lon);
        console.log(Url);
        }
            let userCountry = "";
    let weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+latitude[0]+"&lon="+longitude[0]+"&units=metric&appid=2c3ba4a73398f4ad9d8954ec20141c02"
    let Temp = [];
    let feelsLike = [];
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(weatherUrl);


                feelsLike = [];
                Temp = [];
                for (var i = 0; i < data.list.length; i++) {
                    console.log(data.list[i].main.feels_like + " Feels like");
                    feelsLike.push(data.list[i].main.feels_like);
                    Temp.push(data.list[i].main.temp);
                    var information = document.querySelectorAll('.description');
                    for(var i = 0; i <information.length; i++){
                    information[i].innerHTML = Temp;
                
                

                cityDisp = [];
                var cardInfo = document.querySelectorAll('.header');
                for (var i = 0; i < data.city.name.length; i++) {
                    cityDisp.push(data.city.name);
                    cardInfo[i].innerHTML = cityDisp[i];

                }
                console.log(cityDisp[i] + " This works");

                var cardInfo = document.querySelectorAll('.header');
                
                for (var i = 0; i < cardInfo.length; i++) {
                    cardInfo[i].innerHTML = cityDisp[i];
                }
                
                console.log(Temp);
                console.log(feelsLike);
            }}
            })

        userUrl.push(Url);




    })


});














/*DROPDOWN MENU-------------------*/
$('.ui.selection.dropdown')
  .dropdown({
    clearable: true
  })
;
$('.ui.inline.dropdown')
  .dropdown({
    clearable: true,
    placeholder: 'any'
  })
;
$('.ui.dropdown').dropdown({
    onChange: function(value, text, $selectedItem) {
        console.log("Selected country: " + value);
    }
})

