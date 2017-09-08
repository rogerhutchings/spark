// Google Maps function. Note that it's added to the window object in order to
// make it available as a callback to the maps script.
const mapNode = document.getElementById('map');
const latLong = {
  lat: 51.516145,
  long: -0.135316,
}

let map;

function initMap() {
  map = new google.maps.Map(mapNode, {
    zoom: 16,
    center: new google.maps.LatLng(latLong),
    mapTypeId: 'roadmap'
  });
}

window.initMap = initMap;
