$('document').ready( function(){

  // Footer Date
  var today = new Date();
  var date = today.toDateString();
  var footer_el = document.getElementById('footer');
  footer_el.innerHTML = '<h4>Copyright &copy; ' + date + '</h4><h4>Anthony Ng | Crafted lovingly in San Francisco, California.</h4>';

//Google Map API
// var map;
// var infowindow;

// function initialize() {
//   var sf = new google.maps.LatLng(37.784780, -122.397193);

//   map = new google.maps.Map(document.getElementById('map-canvas'), {
//     center: sf,
//     zoom: 15
//   });

//   var request = {
//     location: sf,
//     radius: 500,
//     types: ['restaurant']
//   };
//   infowindow = new google.maps.InfoWindow();
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

function initialize() {

  var markers = [];
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(37.773493, -122.423864),
      new google.maps.LatLng(37.790147, -122.388974));
  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
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
