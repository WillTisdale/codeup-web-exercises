$(document).ready(function(){


    let min;
    let max;
    let current;
    let description;
    let humdity;
    let wind;
    let windDir;
    let pressure;
    let icon;

    function getDate(i){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = mm + '/' + (Number(dd) + Number(i)) + '/' + yyyy;
        return today
    }

    function forecast() {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial",
            exclude: "current,minutely,hourly,alerts"
        }).done(function (data) {
            console.log(data);
            renderCards(data)
        });

    }

    forecast()

    function renderCards(data){
        let cardHTML = "";
        for(var i = 0; i < 5; i++){
            today = getDate(i)
            max = data.daily[i].temp.max;
            min = data.daily[i].temp.min;
            description = data.daily[i].weather[0].description
            humidity = data.daily[i].humidity
            wind = data.daily[i].wind_speed
            pressure = data.daily[i].pressure
            icon = "http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png"
            windDirections(data, i)
            cardHTML += "<div class='col'><div class='card'>"
            cardHTML += "<div id='dayOfTheWeek' class='card-header text-center'>"
            cardHTML += today  + "</div>"
            cardHTML += "<div class='card-body'>"
            cardHTML += "<p class='text-center'>" + min + "°F / " + max + "°F" + "</p>"
            cardHTML += "<img src='" + icon + "' class='mx-auto d-block'>"
            cardHTML += "<hr>"
            cardHTML += "<p>" + "Description: <strong>" + description + "</strong></p>"
            cardHTML += "<p>" + "Humidity: <strong>" + humidity + "</strong></p>"
            cardHTML += "<p>" + "Wind: <strong>" + wind + " " + windDir + "</strong></p>"
            cardHTML += "<p>" + "Pressure: <strong>" + pressure + "</strong></p>"
            cardHTML += "</div></div></div>"
        }
        $('#card-row').html(cardHTML)
    }

    // function currentWeather() {
    //     $.get("http://api.openweathermap.org/data/2.5/weather", {
    //         APPID: OPEN_WEATHER_APPID,
    //         lat: 29.423017,
    //         lon: -98.48527,
    //         units: "imperial"
    //     }).done(function (data) {
    //         console.log(data);
    //         max = data.main.temp_max;
    //         min = data.main.temp_min;
    //         description = data.weather[0].description
    //         humidity = data.main.humidity
    //         wind = data.wind.speed
    //         pressure = data.main.pressure
    //         windDirection(data)
    //         renderCard()
    //     });
    // }

    // function renderCard(){
    //     let cardHTML = "";
    //     cardHTML += "<div class='col'><div class='card'>"
    //     cardHTML += "<div id='dayOfTheWeek' class='card-header text-center'>"
    //     cardHTML += today + "</div>"
    //     cardHTML += "<div class='card-body'>"
    //     cardHTML += "<p class='text-center'>" + min + "°F / " + max + "°F"
    //     cardHTML += "<hr>"
    //     cardHTML += "<p>" + "Description: <strong>" + description + "</strong></p>"
    //     cardHTML += "<p>" + "Humidity: <strong>" + humidity + "</strong></p>"
    //     cardHTML += "<p>" + "Wind: <strong>" + wind + " " + windDir + "</strong></p>"
    //     cardHTML += "<p>" + "Pressure: <strong>" + pressure + "</strong></p>"
    //     cardHTML += "</div></div></div>"
    //
    //     $('#card-row').html(cardHTML)
    // }

























    //CONVERTS WIND DEGREES INTO A DIRECTION
    function windDirection(data) {
            if (data.wind.deg > 348.75 || data.wind.deg < 11.25) {
                windDir = "N";
            } else if (data.wind.deg >= 11.25 && data.wind.deg < 33.75) {
                windDir = "NNE";
            } else if (data.wind.deg >= 33.75 && data.wind.deg <= 56.25) {
                windDir = "NE";
            } else if (data.wind.deg > 56.25 && data.wind.deg < 78.75) {
                windDir = "ENE";
            } else if (data.wind.deg >= 78.75 && data.wind.deg <= 101.25) {
                windDir = "E";
            } else if (data.wind.deg > 101.25 && data.wind.deg < 123.75) {
                windDir = "ESE";
            } else if (data.wind.deg >= 123.75 && data.wind.deg <= 146.25) {
                windDir = "SE";
            } else if (data.wind.deg > 146.25 && data.wind.deg < 168.75) {
                windDir = "SSE";
            } else if (data.wind.deg >= 168.75 && data.wind.deg <= 191.25) {
                windDir = "S";
            } else if (data.wind.deg > 191.25 && data.wind.deg < 213.75) {
                windDir = "SSW";
            } else if (data.wind.deg >= 213.75 && data.wind.deg <= 236.25) {
                windDir = "SW";
            } else if (data.wind.deg > 236.25 && data.wind.deg < 258.75) {
                windDir = "WSW";
            } else if (data.wind.deg >= 258.75 && data.wind.deg <= 281.25) {
                windDir = "W";
            } else if (data.wind.deg > 281.25 && data.wind.deg < 303.75) {
                windDir = "WNW";
            } else if (data.wind.deg >= 303.75 && data.wind.deg <= 326.25) {
                windDir = "NW";
            } else if (data.wind.deg > 326.25 && data.wind.deg < 348.75) {
                windDir = "NNW";
            }
    }
    function windDirections(data, i) {
            if (data.daily[i].wind_deg > 348.75 || data.daily[i].wind_deg < 11.25) {
                windDir = "N";
            } else if (data.daily[i].wind_deg >= 11.25 && data.daily[i].wind_deg < 33.75) {
                windDir = "NNE";
            } else if (data.daily[i].wind_deg >= 33.75 && data.daily[i].wind_deg <= 56.25) {
                windDir = "NE";
            } else if (data.daily[i].wind_deg > 56.25 && data.daily[i].wind_deg < 78.75) {
                windDir = "ENE";
            } else if (data.daily[i].wind_deg >= 78.75 && data.daily[i].wind_deg <= 101.25) {
                windDir = "E";
            } else if (data.daily[i].wind_deg > 101.25 && data.daily[i].wind_deg < 123.75) {
                windDir = "ESE";
            } else if (data.daily[i].wind_deg >= 123.75 && data.daily[i].wind_deg <= 146.25) {
                windDir = "SE";
            } else if (data.daily[i].wind_deg > 146.25 && data.daily[i].wind_deg < 168.75) {
                windDir = "SSE";
            } else if (data.daily[i].wind_deg >= 168.75 && data.daily[i].wind_deg <= 191.25) {
                windDir = "S";
            } else if (data.daily[i].wind_deg > 191.25 && data.daily[i].wind_deg < 213.75) {
                windDir = "SSW";
            } else if (data.daily[i].wind_deg >= 213.75 && data.daily[i].wind_deg <= 236.25) {
                windDir = "SW";
            } else if (data.daily[i].wind_deg > 236.25 && data.daily[i].wind_deg < 258.75) {
                windDir = "WSW";
            } else if (data.daily[i].wind_deg >= 258.75 && data.daily[i].wind_deg <= 281.25) {
                windDir = "W";
            } else if (data.daily[i].wind_deg > 281.25 && data.daily[i].wind_deg < 303.75) {
                windDir = "WNW";
            } else if (data.daily[i].wind_deg >= 303.75 && data.daily[i].wind_deg <= 326.25) {
                windDir = "NW";
            } else if (data.daily[i].wind_deg > 326.25 && data.daily[i].wind_deg < 348.75) {
                windDir = "NNW";
            }
    }













});