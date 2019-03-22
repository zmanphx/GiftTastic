<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
  //
  $("#cat-button").on("click", function() {

    //
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=DjtMRhmIjAR48e9WAwej7gcQEQ7svzx9&tag=cats";

    //
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    //
      .then(function(response) {

      //
        var imageUrl = response.data.image_original_url;

        //
        var catImage = $("<img>");

        //
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        //
        $("#images").prepend(catImage);
      });
  });
</script>