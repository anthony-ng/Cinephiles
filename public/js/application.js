$('document').ready( function(){
  addEmail();

  // Fix Broken Image
  var image_el = $('.poster')
  for (i = 0; i < image_el.length; i++) {
    if (image_el[i].src.search(/.N\/A/) !== -1) {
      console.log("No Image!");
      image_el[i].setAttribute("src", "../images/oscar.jpg");
    } else {
      console.log("Image loaded!")
    }
  }

  // Footer Date
  var today = new Date();
  var date = today.toDateString();
  var footer_el = document.getElementById('footer');
  footer_el.innerHTML = '<h4>Copyright &copy; ' + date + '</h4><h4>Anthony Ng | Crafted lovingly in San Francisco, California.</h4>';


// Google Map API
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

  var searchBox = new google.maps.places.SearchBox((input));

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

// background Video Button
var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
function vidFade() {
  vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});
pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})


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

//Register Form
function addEmail() {
  $('.register').submit(function(event) {
    event.preventDefault();
    var url = $(this).attr('action');
    //convert a form into key/value pair data
    var data = $(this).serialize();

    // Testing
    console.log(url);
    console.log(data);

    $.ajax({
      type: 'POST',
      url: url,
      data: data

    }).success(function(response) {
      var thank_el = document.getElementById('thanks');
      thank_el.innerHTML = '<h3 id="sub_about">Thank you!<br>We have added your email address to the signup queue.</h3>';
      console.log("ya")
    }).fail(function(response) {
      console.log("fail");
      console.log(data);
    })
  })
}