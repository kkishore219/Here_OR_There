   // Example queryURL for Giphy API
   const queryURL = "assets/images";

   $.ajax({
     url: queryURL,
     method: 'GET'
   }).done(function(response) {
     console.log(response);
   });

   