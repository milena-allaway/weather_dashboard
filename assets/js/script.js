$(document).ready(function () {
    var body = $('body');
    var apiKey = "8599c40ef0b71aabc78512d1ad0db1d5"; //apikey
    var currentHeader = $('#currentHeader');
    var fiveDayHeader = $('#fiveDayHeader');
    var searchBtn = $('#searchBtn');
    var clearBtn = $('#clearBtn');
    var currentWeather = $('#currentWeather');
    var day1 = $('.day1');
    var day2 = $('.day2');
    var day3 = $('.day3');
    var day4 = $('.day4');
    var day5 = $('.day5');
    var date = dayjs();
    
    //align all text and hide headers for sections that don't have content yet
    body.css('text-align', 'center');
    currentHeader.hide();
    fiveDayHeader.hide();
    
    // https://stackoverflow.com/questions/65546260/  <-- include() reference
    // get saved cities, or create blank array if nothing saved, and save the new searched city to local storage, if it is not already saved
    function saveCity(city) {
        var savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
        if (!savedCities.includes(city)) {
            savedCities.push(city);
        localStorage.setItem('savedCities',JSON.stringify(savedCities));
        }
        //add saved city button to saved searches section
        addCity();
    };
    
    //get saved city info from storage if exists
    function addCity () {
        var savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
        var savedBtnsDiv = $('#savedCityBtns');
        //clear saved buttons to allow display of updated array of saved cities
        savedBtnsDiv.empty();
        //create buttons for saved cities
        savedCities.forEach(function (city) {
            var cityBtn = $('<button>')
            .text(city)
            .addClass('savedBtns')
            .click(function () {
                $('input[name="city"]').val(city);
                getWeather();
            });
            savedBtnsDiv.append(cityBtn);
        });
    };


    //get weather data based on searched city input
    function getWeather() {
        currentHeader.show();
        fiveDayHeader.show();
        var city = $('input[name="city"]').val().toUpperCase();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
        fetch(queryURL)
        .then(function (response) {
            if(response.ok) {
                saveCity(city);
                return response.json();
            } else {
                alert('Something went wrong, make sure input field is valid');
            };
        })
        .then(function (data) {
        console.log(data);
            // //get longtitude and latitude for when getting 5 day forecast
            var lon = data.coord.lon;
            var lat = data.coord.lat;
            console.log("longtitude is " + lon + ", latitude is " + lat);
            //current weather section
            // add img info source http://aspsolution.net/Code/6/5240/How-to-add-image-src-dynamically-using-Jquery/
            //clear previous data, https://api.jquery.com/empty/
            currentWeather.empty();
            day1.empty();
            day2.empty();
            day3.empty();
            day4.empty();
            day5.empty();
            //append city name and date
            var country = data.sys.country;
            var cityDate = $('<p>').text(city + ", " + country + ", " + date.format('MM/DD/YYYY'));
            currentWeather.append(cityDate).css({"font-weight": "bold", "border": "1px solid black"});
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

            //get data for 5 day forecast
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
                
                var iconDay1 = data.list[5].weather[0].icon;
                var iconDay1Url = "https://openweathermap.org/img/wn/" + iconDay1 + "@2x.png"
                var weatherIconDay1 = $('<img>').attr("src", iconDay1Url);
                var temperature1 = $('<p>').text("Temperature: " + data.list[5].main.temp + "°C");
                var humidity1 = $('<p>').text("Humidity: " + data.list[5].main.humidity + "%");
                var windSpeed1 = $('<p>').text("Wind Speed: " + data.list[5].wind.speed + " m/s");
                var date1 = $('<p>').text(dayjs().add(1, 'day').format('MM/DD/YYYY'));
                day1.append(weatherIconDay1, date1, temperature1, humidity1, windSpeed1).css({"font-weight": "bold", "border": "1px solid black"});

                var iconDay2 = data.list[13].weather[0].icon;
                var iconDay2Url = "https://openweathermap.org/img/wn/" + iconDay2 + "@2x.png"
                var weatherIconDay2 = $('<img>').attr("src", iconDay2Url);
                var temperature2 = $('<p>').text("Temperature: " + data.list[13].main.temp + "°C");
                var humidity2 = $('<p>').text("Humidity: " + data.list[13].main.humidity + "%");
                var windSpeed2 = $('<p>').text("Wind Speed: " + data.list[13].wind.speed + " m/s");
                var date2 = $('<p>').text(dayjs().add(2, 'day').format('MM/DD/YYYY'));
                day2.append(weatherIconDay2, date2, temperature2, humidity2, windSpeed2).css({"font-weight": "bold", "border": "1px solid black"});

                var iconDay3 = data.list[21].weather[0].icon;
                var iconDay3Url = "https://openweathermap.org/img/wn/" + iconDay3 + "@2x.png"
                var weatherIconDay3 = $('<img>').attr("src", iconDay3Url);
                var temperature3 = $('<p>').text("Temperature: " + data.list[21].main.temp + "°C");
                var humidity3 = $('<p>').text("Humidity: " + data.list[21].main.humidity + "%");
                var windSpeed3 = $('<p>').text("Wind Speed: " + data.list[21].wind.speed + " m/s");
                var date3 = $('<p>').text(dayjs().add(3, 'day').format('MM/DD/YYYY'));
                day3.append(weatherIconDay3, date3, temperature3, humidity3, windSpeed3).css({"font-weight": "bold", "border": "1px solid black"});

                var iconDay4 = data.list[29].weather[0].icon;
                var iconDay4Url = "https://openweathermap.org/img/wn/" + iconDay4 + "@2x.png"
                var weatherIconDay4 = $('<img>').attr("src", iconDay4Url);
                var temperature4 = $('<p>').text("Temperature: " + data.list[29].main.temp + "°C");
                var humidity4 = $('<p>').text("Humidity: " + data.list[29].main.humidity + "%");
                var windSpeed4 = $('<p>').text("Wind Speed: " + data.list[29].wind.speed + " m/s");
                var date4 = $('<p>').text(dayjs().add(4, 'day').format('MM/DD/YYYY'));
                day4.append(weatherIconDay4, date4, temperature4, humidity4, windSpeed4).css({"font-weight": "bold", "border": "1px solid black"});

                var iconDay5 = data.list[37].weather[0].icon;
                var iconDay5Url = "https://openweathermap.org/img/wn/" + iconDay5 + "@2x.png"
                var weatherIconDay5 = $('<img>').attr("src", iconDay5Url);
                var temperature5 = $('<p>').text("Temperature: " + data.list[37].main.temp + "°C");
                var humidity5 = $('<p>').text("Humidity: " + data.list[37].main.humidity + "%");
                var windSpeed5 = $('<p>').text("Wind Speed: " + data.list[37].wind.speed + " m/s");
                var date5 = $('<p>').text(dayjs().add(5, 'day').format('MM/DD/YYYY'));
                day5.append(weatherIconDay5, date5, temperature5, humidity5, windSpeed5).css({"font-weight": "bold", "border": "1px solid black"});

            });   

        });

        //Clear search input
        $('input[name="city"]').val("");

    };  

    //clear search history
    clearBtn.click(function() {
        localStorage.clear();
        $('#savedCityBtns').empty();
    });

    //get weather when search button is clicked then add new city to saved cities
    searchBtn.click(getWeather);
    addCity();

});

//testing:
    //5 day forecast
    //https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    // geocoding url example
    // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    // use ISO 3166 country codes

    //"https://openweathermap.org/img/wn/"" + icon + "@2x.png"