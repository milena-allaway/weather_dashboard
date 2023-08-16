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
            };
        })
        .then(function (data) {
        console.log(data);
            // //get longtitude and latitude for when getting 5 day forcast
            var lon = data.coord.lon;
            var lat = data.coord.lat;
            console.log("longtitude is " + lon + ", latitude is " + lat);
            //current weather section
            // add img info source http://aspsolution.net/Code/6/5240/How-to-add-image-src-dynamically-using-Jquery/
            //clear previous data, https://api.jquery.com/empty/
            currentWeather.empty();
            //append city name and date
            var country = data.sys.country;
            var cityDate = $('<p>').text(city + ", " + country + ", " + date.format('MM/DD/YYYY'));
            currentWeather.append(cityDate).css("font-weight", "bold");
            // create weather icon and get src/url
            var icon = data.weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log(iconUrl);
            var weatherIcon = $('<img>').attr("src", iconUrl);
            // create/append icon,temp,humidity,wind info            
            var temperature = $('<p>').text("Temperature: " + data.main.temp + "°C");
            var humidity = $('<p>').text("Humidity: " + data.main.humidity + "%");
            var windSpeed = $('<p>').text("Wind Speed: " + data.wind.speed + " m/s");
            currentWeather.append(weatherIcon, temperature, humidity, windSpeed);
        
            // 5 day forcast
            var query5dayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&" + "lon=" + lon + "&appid=" + apiKey + "&units=metric";
            fetch(query5dayURL)
            .then(function (response) {
                if(response.ok) {
                    return response.json();
                } else {
                    alert("Something went wrong, couldn't load 5 day forecast.");
                };
            })
            .then(function (data) {
            console.log(data);
            
                var day1 = $('.day1');
                var iconDay1 = data.list[5].weather[0].icon;
                var iconDay1Url = "https://openweathermap.org/img/wn/" + iconDay1 + "@2x.png"
                var weatherIconDay1 = $('<img>').attr("src", iconDay1Url);
                var temperature1 = $('<p>').text("Temperature: " + data.list[5].main.temp + "°C");
                var humidity1 = $('<p>').text("Humidity: " + data.list[5].main.humidity + "%");
                var windSpeed1 = $('<p>').text("Wind Speed: " + data.list[5].wind.speed + " m/s");
                var date1 = $('<p>').text(dayjs().add(1, 'day').format('MM/DD/YYYY'));
                day1.append(weatherIconDay1, date1, temperature1, humidity1, windSpeed1).css("font-weight", "bold");;

                var day2 = $('.day2');
                var iconDay2 = data.list[13].weather[0].icon;
                var iconDay2Url = "https://openweathermap.org/img/wn/" + iconDay2 + "@2x.png"
                var weatherIconDay2 = $('<img>').attr("src", iconDay2Url);
                var temperature2 = $('<p>').text("Temperature: " + data.list[13].main.temp + "°C");
                var humidity2 = $('<p>').text("Humidity: " + data.list[13].main.humidity + "%");
                var windSpeed2 = $('<p>').text("Wind Speed: " + data.list[13].wind.speed + " m/s");
                var date2 = $('<p>').text(dayjs().add(2, 'day').format('MM/DD/YYYY'));
                day2.append(weatherIconDay2, date2, temperature2, humidity2, windSpeed2).css("font-weight", "bold");;

                var day3 = $('.day3');
                var iconDay3 = data.list[21].weather[0].icon;
                var iconDay3Url = "https://openweathermap.org/img/wn/" + iconDay3 + "@2x.png"
                var weatherIconDay3 = $('<img>').attr("src", iconDay3Url);
                var temperature3 = $('<p>').text("Temperature: " + data.list[21].main.temp + "°C");
                var humidity3 = $('<p>').text("Humidity: " + data.list[21].main.humidity + "%");
                var windSpeed3 = $('<p>').text("Wind Speed: " + data.list[21].wind.speed + " m/s");
                var date3 = $('<p>').text(dayjs().add(3, 'day').format('MM/DD/YYYY'));
                day3.append(weatherIconDay3, date3, temperature3, humidity3, windSpeed3).css("font-weight", "bold");;

                var day4 = $('.day4');
                var iconDay4 = data.list[29].weather[0].icon;
                var iconDay4Url = "https://openweathermap.org/img/wn/" + iconDay4 + "@2x.png"
                var weatherIconDay4 = $('<img>').attr("src", iconDay4Url);
                var temperature4 = $('<p>').text("Temperature: " + data.list[29].main.temp + "°C");
                var humidity4 = $('<p>').text("Humidity: " + data.list[29].main.humidity + "%");
                var windSpeed4 = $('<p>').text("Wind Speed: " + data.list[29].wind.speed + " m/s");
                var date4 = $('<p>').text(dayjs().add(4, 'day').format('MM/DD/YYYY'));
                day4.append(weatherIconDay4, date4, temperature4, humidity4, windSpeed4).css("font-weight", "bold");;

                var day5 = $('.day5');
                var iconDay5 = data.list[37].weather[0].icon;
                var iconDay5Url = "https://openweathermap.org/img/wn/" + iconDay5 + "@2x.png"
                var weatherIconDay5 = $('<img>').attr("src", iconDay5Url);
                var temperature5 = $('<p>').text("Temperature: " + data.list[37].main.temp + "°C");
                var humidity5 = $('<p>').text("Humidity: " + data.list[37].main.humidity + "%");
                var windSpeed5 = $('<p>').text("Wind Speed: " + data.list[37].wind.speed + " m/s");
                var date5 = $('<p>').text(dayjs().add(5, 'day').format('MM/DD/YYYY'));
                day5.append(weatherIconDay5, date5, temperature5, humidity5, windSpeed5).css("font-weight", "bold");;


            });    
        });  
    };  

    searchBtn.click(getApi);

    // function saveCity(city) {
    //     var savedCities = JSON.parse(localStorage.)

    // }

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