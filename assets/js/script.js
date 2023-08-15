$(document).ready(function () {
    var body = $('body');
    var pinktest = $('.pinktest');
    var apiKey = "8599c40ef0b71aabc78512d1ad0db1d5"; //apikey
 
    var searchBtn = $('#searchBtn');
    var currentWeather = $('#currentWeather');
    var date = dayjs();
    
 
    body.css('text-align', 'center');
    pinktest.css('background-color', 'pink');//test to see where divs borders are

    function getApi() {
        var city = $('input[name="city"]').val().toUpperCase();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
        fetch(queryURL)
        .then(function (response) {
            if(response.ok) {
                return response.json();
            } else {
                alert('Something went wrong, make sure input field is valid');
            }
        })
        .then(function (data) {
        console.log(data);
            //current weather section
            // add img info source http://aspsolution.net/Code/6/5240/How-to-add-image-src-dynamically-using-Jquery/
            //clear previous data, https://api.jquery.com/empty/
            currentWeather.empty();
            //append city name and date
            var country = data.sys.country;
            var cityDate = $('<p>')
            cityDate.text(city + ", " + country + ", " + date.format('DD/MM/YYYY'));
            currentWeather.append(cityDate).css("font-weight", "bold");
            // create/append weather icon and get src/url
            var weatherIcon = $('<img>');
            var icon = data.weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log(iconUrl);
            weatherIcon.attr("src", iconUrl);
            currentWeather.append(weatherIcon);
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

            //5 day forcast


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

    //"https://openweathermap.org/img/wn/"" + icon + "@2x.png"