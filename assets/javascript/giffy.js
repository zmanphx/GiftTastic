$(document).ready(function() {
  console.log("ready!");

  var superhero = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Green Lantern",
    "Captain America",
    "Incredible Hulk",
    "Aquaman",
    "Captain Marvel",
    "Wolverine",
    "Thor"
  ];

  makeButtons(false);


  function makeButtons(submit) {
    if( submit== false){
    for (i = 0; i < superhero.length; i++) {
      //create a button using jquery
      var newButton = $("<button>");
      //add a class for the button
      newButton.addClass("superhero");
      $(".superhero").css({ "margin-right": "25px", "margin-top": "25px" });
      newButton.attr("data-name", superhero[i]);
      // text to the button
      newButton.text(superhero[i]);

      $("#button").append(newButton);
    }
  }
  else
  { // submit button
     var topic = $('#topic-here').val().trim();
     var newButton= $("<button>");
     newButton.addClass("superhero");
     $(".superhero").css({ "margin-right": "25px", "margin-top": "25px" })  
     newButton.attr("data-name", topic);
     newButton.text(topic);

     $("#button").append(newButton);
  }
}


$("#add-Topic").on("click", function(event){
   event.preventDefault();
   makeButtons(true);


});



$(document).on("click", "body *", function(event) {
    event.preventDefault();
  
   


    if (event.target.className == "superhero") {
      $("#myContent").empty();
      event.stopPropagation();
      
      
      var qitem = $(this).attr("data-name");
      var qitems = qitem.replace(" ", "+");

      var giffyUrl = "https://api.giphy.com/v1/gifs/search?q=";
      var myKey = "api_key=DjtMRhmIjAR48e9WAwej7gcQEQ7svzx9";

      var searchURL = giffyUrl + qitems + "&" + myKey + "&" + "limit=14";

      $.ajax({
        url: searchURL,
        method: "GET"
      }).then(function(response) {
        var data = response.data;
        console.log(response.data);

        $.each(data, function(i) {
          var imageUrl = data[i].images.fixed_height_still.url;
          var animate = data[i].images.fixed_height.url;
          var dataImage = $("<img>");
          var rating = data[i].rating;
          dataImage.attr({
            src: imageUrl,
            height: "200",
            width: "200",
            hspace: "5",
            vspace: "5"
          });
          dataImage.attr("still", imageUrl);
          dataImage.attr("animate", animate);
          dataImage.attr("rating", rating);
          // catImage.attr("alt", "cat image");

          var divImg = $("<div>").addClass("divImg");
          $(divImg).text("Rating -" + rating);
          var newDiv = $(divImg).append(dataImage);

          $("#myContent").prepend(newDiv);
        });
      });
    }

    if (event.target.localName == "img") {
      event.stopPropagation();

      if ($(this).attr("src") === $(this).attr("still")) {
        $(this).attr("src", $(this).attr("animate"));
      } else {
        $(this).attr("src", $(this).attr("still"));
      }
    }
  });
});
