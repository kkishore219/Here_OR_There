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

// Code for temperature conversion from kelvin to fahrenheit: ((K-273.15)*1.8)+32

// $("#convertToCelsius").click(function() {
//   if (fahrenheit) {
//       $("#temperature").text(((($("#temperature").text() - 32) * 5) / 9));
//   }
//   fahrenheit = false;
//   console.log(btn1);
// });

// $("#convertToFahrenheit").click(function() {
//     if (fahrenheit == false) {
//         $("#temperature").text((($("#temperature").text() * (9/5)) + 32));
//     }
//     fahrenheit = true;
// });

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

  getWeatherInfo(cityName, function(data) {
    $("#city1").html(data.city);
    $("#main_weather1").html(data.main);
    $("#description_weather1").html(data.description);
    $("#weather_image1").attr("src", data.image);
    $("#temperature1").html(data.temp);
    $("#pressure1").html(data.pressure);
    $("#humidity1").html(data.humidity);

    // $(".left-panel").show();

    addWeatherToFirebase(cityName);
  });
});

$("#btn2").on("click", function() {
  var cityName = $("#textInput2").val();

  getWeatherInfo(cityName, function(data) {
    $("#city2").html(data.city);
    $("#main_weather2").html(data.main);
    $("#description_weather2").html(data.description);
    $("#weather_image2").attr("src", data.image);
    $("#temperature2").html(data.temp);
    $("#pressure2").html(data.pressure);
    $("#humidity2").html(data.humidity);

    // $(".right-panel").show();

    addWeatherToFirebase(cityName);
  });
});

// incorporate this into script so that search bar does not disappear

          //   //function that hides questions,timer, and score until start button is pressed.
          //   $(document).ready(function() {
          //     $(".questionContainer").hide();
          //     $("#timer").hide();
          //     $(".scoreDisplay").hide();
          // });

          // //function that unhides the questions, timer and score.
          // $("#startGame").click(function() {
          //     $(".questionContainer").show();
          //     $("#timer").show();
          //     $(".scoreDisplay").show();
          // });

// Code for temperature conversion from kelvin to fahrenheit: ((K-273.15)*1.8)+32

