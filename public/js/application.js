$('document').ready( function(){

  // Footer Date
  var today = new Date();
  var date = today.toDateString();
  var footer_el = document.getElementById('footer');
  footer_el.innerHTML = '<h4>Copyright &copy; ' + date + '</h4><h4>Anthony Ng | Crafted lovingly in San Francisco, California.</h4>';

//Google Map API
var map;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: pyrmont,
    zoom: 15
  });

  var request = {
    location: pyrmont,
    radius: 500,
    types: ['store']
  };
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Hello'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
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
