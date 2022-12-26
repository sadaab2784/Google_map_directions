// Api access token to configure Mapbox GL JS
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxvbmUyNzg0IiwiYSI6ImNsYzRodjB1ZTF5N3kzcXA4cTM1Z3FrYWUifQ.aC4wN3djHOm7kwC-aGTciQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

// here we have to create a function to successLocation
function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

// here we have to setUpMap function
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: center, // starting position [lng, lat]
    zoom: 15, // starting zoom
  });

// add the control to the map
// Initialize the GeolocationControl
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  // Here directions plugin for mapbox GL JS using the mapbox Directions API
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
