const config = {
  apiKey: "AIzaSyB8GZIm_1SEoqo4gVr_l0e-cRgJ6GDBPA0",
  authDomain: "here-or-there.firebaseapp.com",
  databaseURL: "https://here-or-there.firebaseio.com",
  projectId: "here-or-there",
  storageBucket: "here-or-there.appspot.com",
  messagingSenderId: "448013417470"
};

firebase.initializeApp(config);

var dbRef = firebase.database().ref();
// create function to call the openweathermap api

var appID = "bff087f159c4f0f8f86174f72117926c";

function getWeatherInfo(location, callback) {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + appID;

  $.getJSON(weatherUrl, function(json) {
      callback({
        city: json.name,
        main: json.weather[0].main,
        description: json.weather[0].description,
        image: "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png",
        temp: json.main.temp,
        pressure: json.main.pressure,
        humidity: json.main.humidity
      });
  });
}

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
function addWeatherToFirebase(cityName) {
  event.preventDefault();
  
  let weather = {
    city: cityName
  };
  dbRef.push(weather);
  return weather;
}

$("#btn1").on("click", function() {
  var cityName = $("#textInput1").val();
  $("#textInput1").val("");

  getWeatherInfo(cityName, function(data) {
    $("#city1").html(data.city);
    $("#main_weather1").html(data.main);
    $("#description_weather1").html(data.description);
    $("#weather_image1").attr("src", data.image);
    let ftemp = ((data.temp - 273.15) * 1.8) + 32;
    let t = Math.floor(ftemp);
    $("#temperature1").html(`${t} &#8457;`);
    $("#pressure1").html(data.pressure);
    $("#humidity1").html(data.humidity);
    $("#leftPanelWeather").removeClass("hidden");

    // $(".left-panel").show();

    addWeatherToFirebase(cityName);
  });
});

$("#btn2").on("click", function() {
  var cityName = $("#textInput2").val();
  $("#textInput2").val("");

  getWeatherInfo(cityName, function(data) {
    $("#city2").html(data.city);
    $("#main_weather2").html(data.main);
    $("#description_weather2").html(data.description);
    $("#weather_image2").attr("src", data.image);
    let ftemp = ((data.temp - 273.15) *1.8) + 32;
    let t = Math.floor(ftemp);
    $("#temperature2").html(`${t} &#8457;`);
    $("#pressure2").html(data.pressure);
    $("#humidity2").html(data.humidity);
    $("#rightPanelWeather").removeClass("hidden");

    // $(".right-panel").show();

    addWeatherToFirebase(cityName);
  });
});

