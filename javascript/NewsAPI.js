
var numArticles = 10;
      

// METHODS
// ============================= ============================
// ************************Code below for City1 News Results***********************************

$("#textInput1").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#btn1").click();
      $("#textInput2").val ("");
  }
});

// on.("click") function associated with the Go Button
$("#btn1").on("click", function(event1) {  
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
    console.log ($("#textInput1"))

    var currentDate = Date.now();
    // To display the name of the city
    //$("#city1").html("searchTerm");

    //var searchURL = url + searchTerm;

     var searchURL = 'https://newsapi.org/v2/everything?' +
     'q="' +searchTerm+ '"&'+
     'from="' +currentDate+ '"&'+
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
     .then(function(response) {

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
              (i + 1) + " - </span><strong> " +
              response.articles[i].title + "</strong></h3>"+
              "<h4>" + response.articles[i].description + "</h4>"+
              "<a href='" + response.articles[i].url + "'>" + response.articles[i].url + "</a>"
            );
  
       
        }};
  
     })

    });

// ************************Code below for City2 News Results***********************************
$("#textInput2").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#btn2").click();
      $("#textInput2").val ("");
  }
});

// on.("click") function associated with the Go Button
$("#btn2").on("click", function(event2) {
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
    console.log ($("#textInput2"))


    // To display the name of the city
    //document.getElementById("city1").innerHTML = "searchTerm";
    //$("#city1").html$("#searchTerm");

    var currentDate = Date.now(); // new Date();

    //var searchURL = url + searchTerm;

     var searchURL = 'https://newsapi.org/v2/everything?' +
     'q="' +searchTerm+ '"&'+
     'from="' +currentDate+ '"&'+
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
     .then(function(response) {

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
              (i + 1) + " - </span><strong> " +
              response.articles[i].title + "</strong></h3>"+
              "<h4>" + response.articles[i].description + "</h4>"+
              "<a href='" + response.articles[i].url + "'>" + response.articles[i].url + "</a>"
            );
  
       
        }};
     
     })

})

