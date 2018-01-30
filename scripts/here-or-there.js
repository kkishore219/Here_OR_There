//To do with tutor:  
// 1 - how to do I link the query to the user input for a search? (right now articles for Apple are hardcoded in)
// 2 - how do I update the "from" date to always use the current date?  
// 3 - how do I break up each article so that it is spaced correctly
// 4 - how do I only display title, description, source and url?   
// 5 - enable news API search when the user hits <ENTER> intead of clicking the button.


var numArticles = 10;


// METHODS
// ============================= ============================
// ************************Code below for City1 News Results***********************************

//code below does not work, it's supposed to trigger the news API when the user presses <ENTER> instead of clicking the button
$("#textInput1").keypress(function (event) {
    if (event.which == 13) {
        event.preventDefault();
        $("btn1").click();
    }
});

// on.("click") function associated with the Go Button
$("#btn1").on("click", function (event1) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks).
    event1.preventDefault();

    // Initially sets the articleCounter to 0
    articleCounter = 0;

    // Empties the region associated with the articles
    $("#info1").empty();


    // These variables will hold the results we get from the user's inputs via HTML
    // Grabbing text the user typed into the search input
    var searchTerm = $("#textInput1").val().trim();
    console.log($("#textInput1"))

    var currentDate = Date.now();
    // To display the name of the city
    //$("#city1").html("searchTerm");

    //var searchURL = url + searchTerm;

    var searchURL = 'https://newsapi.org/v2/everything?' +
        'q="' + searchTerm + '"&' +
        'from="' + currentDate + '"&' +
        //'from=2018-01-27&' +
        'sortBy=popularity&' +
        'apiKey=0ecb5163eefb43e6b9eb82d77829f5e4';
    console.log(searchURL);
    //var req = new Request(searchURL);

    var newsSection = $("#info1");



    // This runQuery function expects two parameters:
    // (the number of articles to show and the final URL to download data from)
    //function runQuery(numArticles, queryURL) {

    // API request for info
    $.ajax({
        url: searchURL,
        method: "GET"
    })
        .then(function (response) {

            // Loop through and provide the correct number of articles
            for (var i = 0; i < numArticles && i < response.articles.length; i++) {

                // Add to the Article Counter (to make sure we show the right number)
                // articleCounter++;


                // Confirm that the specific JSON for the article isn't missing any details
                // If the article has a headline include the headline in the HTML

                console.log(response);
                if (response.articles[i].title !== "null") {
                    $("#info1")
                        .append(
                        "<h3 class='title'><span class='label label-primary'>" +
                        i + "</span><strong> " +
                        response.articles[i].title + "</strong></h3>" +
                        "<h4>" + response.articles[i].description + "</h4>" +
                        "<p>" + response.articles[i].url + "<p>"
                        );


                }
            };


            // add the article content
            //     $("#info1").append(JSON.stringify(response.articles));

            //console.log(response.json());
        })

});

// ************************Code below for City2 News Results***********************************

// on.("click") function associated with the Go Button
$("#btn2").on("click", function (event2) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks).
    event2.preventDefault();

    // Initially sets the articleCounter to 0
    articleCounter = 0;

    // Empties the region associated with the articles
    $("#info2").empty();


    // These variables will hold the results we get from the user's inputs via HTML
    // Grabbing text the user typed into the search input
    var searchTerm = $("#textInput2").val().trim();
    console.log($("#textInput2"))


    // To display the name of the city
    //document.getElementById("city1").innerHTML = "searchTerm";
    //$("#city1").html$("#searchTerm");

    var currentDate = Date.now(); // new Date();
    // "2018-01-26"
    //var date = currentDate.getDate(); //return 26
    //var month = currentDate.getMonth(); // return 1
    //if (month<10) {month = "0" + month}
    //var year = currentDate.getFullYear(); // returns 2018
    //year + "-" + month + "-" + date; // 2018-1-26


    //var searchURL = url + searchTerm;

    var searchURL = 'https://newsapi.org/v2/everything?' +
        'q="' + searchTerm + '"&' +
        'from="' + currentDate + '"&' +
        //'from=2018-01-27&' +
        'sortBy=popularity&' +
        'apiKey=0ecb5163eefb43e6b9eb82d77829f5e4';
    console.log(searchURL);
    //var req = new Request(searchURL);

    var newsSection = $("#info2");



    // This runQuery function expects two parameters:
    // (the number of articles to show and the final URL to download data from)
    //function runQuery(numArticles, queryURL) {

    // API request for info
    $.ajax({
        url: searchURL,
        method: "GET"
    })
        .then(function (response) {

            // Loop through and provide the correct number of articles
            for (var i = 0; i < numArticles && i < response.articles.length; i++) {

                // Add to the Article Counter (to make sure we show the right number)
                // articleCounter++;


                // Confirm that the specific JSON for the article isn't missing any details
                // If the article has a headline include the headline in the HTML

                console.log(response);
                if (response.articles[i].title !== "null") {
                    $("#info2")
                        .append(
                        "<h3 class='title'><span class='label label-primary'>" +
                        i + "</span><strong> " +
                        response.articles[i].title + "</strong></h3>" +
                        "<h4>" + response.articles[i].description + "</h4>" +
                        "<p>" + response.articles[i].url + "<p>"
                        );


                }
            };


            // add the article content
            //     $("#info1").append(JSON.stringify(response.articles));

            //console.log(response.json());
        })

})

//********************************** code for weather API **********************************

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

    $.getJSON(weatherUrl, function (json) {
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

//Code to hide the weather info until the button is clicked

//$(document).ready(function() {
 //   $("#city1").hide();
   // $("#main_weather1").hide();
    //$("#description_weather1").hide();
    //$("#weather_image1").hide();
    //$("#temperature1").hide();
   // $("#pressure1").hide();
   // $("#humidity1").hide();
//});

$("#btn1").on("click", function () {
    var cityName = $("#textInput1").val();

    getWeatherInfo(cityName, function (data) {
        $("#city1").html(data.city);
        $("#main_weather1").html(data.main);
        $("#description_weather1").html(data.description);
        $("#weather_image1").attr("src", data.image);
        $("#temperature1").html(data.temp);
        $("#pressure1").html(data.pressure);
        $("#humidity1").html(data.humidity);

        //$(".left-panel").show();

        addWeatherToFirebase(cityName);
    });
});

$("#btn2").on("click", function () {
    var cityName = $("#textInput2").val();

    getWeatherInfo(cityName, function (data) {
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


// Code for temperature conversion from kelvin to fahrenheit: ((K-273.15)*1.8)+32