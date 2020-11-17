$(document).ready(function(){

    let today = new Date();
    let min;
    let max;
    let current;
    let description;
    let humdity;
    let wind;
    let windDir;
    let pressure;

    console.log(today);

    function currentWeather() {
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            max = data.main.temp_max;
            min = data.main.temp_min;
            description = data.weather[0].description
            humidity = data.main.humidity
            wind = data.wind.speed
            pressure = data.main.pressure
            windDirection(data)
            renderCard()
        });


    }

    currentWeather()



    function renderCard(){

        let cardHTML = "";

        cardHTML += "<div class='col'><div class='card'>"
        cardHTML += "<div id='dayOfTheWeek' class='card-header text-center'>"
        cardHTML += today + "</div>"
        cardHTML += "<div class='card-body'>"
        cardHTML += "<p class='text-center'>" + min + "°F / " + max + "°F"
        cardHTML += "<hr>"
        cardHTML += "<p>" + "Description: <strong>" + description + "</strong></p>"
        cardHTML += "<p>" + "Humidity: <strong>" + humidity + "</strong></p>"
        cardHTML += "<p>" + "Wind: <strong>" + wind + " " + windDir + "</strong></p>"
        cardHTML += "<p>" + "Pressure: <strong>" + pressure + "</strong></p>"
        cardHTML += "</div></div></div>"

        $('#card-row').html(cardHTML)
    }





























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













});