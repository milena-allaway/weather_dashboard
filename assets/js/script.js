$(document).ready(function () {
    var body = $('body');
    var pinktest = $('.pinktest');
    var apiKey = "8599c40ef0b71aabc78512d1ad0db1d5"; //apikey
 
    var searchBtn = $('#searchBtn');
    var currentWeather = $('#currentWeather');
    var date = dayjs();
    console.log(date.format('dddd, MMMM D YYYY'));
 



    body.css('text-align', 'center');
    pinktest.css('background-color', 'pink');//test to see where divs borders are

    function getApi() {
        var city = $('input[name="city"]').val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
        fetch(queryURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        
           //clear previous data, https://api.jquery.com/empty/
            currentWeather.empty();
            //append city name and date
            var cityDate = $('<p>')
            cityDate.text(city + ", " + date.format('MMM D, YYYY'));
            currentWeather.append(cityDate).css("font-weight", "bold");
            // create/append temp,humidity,wind info
            var temperature = $('<p>');
            var humidity = $('<p>');
            var windSpeed = $('<p>');
            temperature.text("Temperature: " + data.main.temp + "°C");
            humidity.text("Humidity: " + data.main.humidity + "%");
            windSpeed.text("Wind Speed: " + data.wind.speed + " m/s");
            currentWeather.append(temperature);
            currentWeather.append(humidity);
            currentWeather.append(windSpeed);

        });    
    };    

    searchBtn.click(getApi);
});

//TEST AREA
// for (var i = 0; i < data.length; i++) {
    //     var temperature = $('<p>');
    //     var humidity = $('<p>');
    //     var windSpeed = $('<p>');
    //     temperature.text(data[i].main.temp);
    //     humidity.text(data[i].main.humidity);
    //     windSpeed.text(data[i].wind.speed);
    //     currentWeather.append(temperature);
    //     currentWeather.append(humidity);
    //     currentWeather.append(windSpeed);
    
    // };

//5 day forcast
    //https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    // geocoding url example
    // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    // use ISO 3166 country codes