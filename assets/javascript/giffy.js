$( document ).ready(function() {
    console.log( "ready!" );


var superhero= ['Superman', 'Batman', 'Wonder Woman', 'Green Lantern',
                'Captain America', 'Incredible Hulk','Aquaman', 'Captain Marvel'];

    for (i=0;i< superhero.length; i++){
          //create a button using jquery 
     var newButton = $("<button>");
      //add a class for the button   
      newButton.addClass("superhero");
      $(".superhero").css({"margin-right": "25px", "margin-top":"25px"});
      newButton.attr("data-name",  superhero[i]);
      // text to the button
      newButton.text(superhero[i]);
      
      $("#button").append(newButton);
      




    };
            

     $(document).on('click','body *', function(event){
    
      if(event.target.className =='superhero'){
      var qitem = $(this).attr("data-name");  
       
      qitem = qitem.replace(" ",'+');

      var giffyUrl = "http://api.giphy.com/v1/gifs/search?q=";
      var myKey = "api_key=DjtMRhmIjAR48e9WAwej7gcQEQ7svzx9";
    
      var example= "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
      var searchURL = giffyUrl+ qitem+ "&"+myKey+ "&"+ "limit=10" ;
      
      $.ajax({ 
        url: searchURL,
         method: "GET" }).then(function(response){
          var data= response.data;
          console.log(response.data);
             
           $.each(data,function(i){
            var imageUrl = data[i].images.fixed_height_still.url;
            var animate =  data[i].images.fixed_height.url
            var dataImage = $("<img>");
  
            dataImage.attr({"src": imageUrl, "height": "200", "width":"200", "hspace": "5", "vspace":"5"});
            dataImage.attr("still", imageUrl);
            dataImage.attr("animate", animate);
           // catImage.attr("alt", "cat image");
          
            $("#myContent").prepend(dataImage);

          });
   


      });
      }
     
       
               if (event.target.localName =='img'){
             
             
              if($(this).attr("src")=== $(this).attr("still")){
                  $(this).attr("src", $(this).attr("animate"));

              } 
              else {
              ($(this).attr("src",$(this).attr("still")));

              }
            }

      






     });  
     



















});