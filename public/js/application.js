$('document').ready( function(){

  // Footer Date
  var today = new Date();
  var date = today.toDateString();
  var footer_el = document.getElementById('footer');
  footer_el.innerHTML = '<h4>Copyright &copy; ' + date + '</h4><h4>Anthony Ng | Crafted lovingly in San Francisco, California.</h4>';

  var map;
  function initialize() {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);




  // $('form').on('submit', function(event){
  //   event.preventDefault()
  //   $('form').nextAll().remove()
  //   $.ajax({
  //     type: 'GET',
  //     url: $(this).attr('action'),
  //     data: $(this).serialize()
  //   }).done(function(data) {
  //     $(".container").append(data)
  //   })
  // })
})
