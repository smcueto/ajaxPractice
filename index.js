$('.giphybutton').click(function(e) {
e.preventDefault()
    console.log("click noticed")

var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=55vMNWpCy4HdCXMqeGB5dVPHJwXnFOuj&limit=2";

$.ajax({
      url: queryURL,
      method: "GET",
      dataType : "json",
    }).done(function(json) {
	console.log(json);
  $('img').attr('src', json.data.image_url)
  });

});
