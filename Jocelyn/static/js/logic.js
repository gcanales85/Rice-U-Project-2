// Set Bounds so map is US
// var maxBounds = L.latLngBounds(
//   L.latLng(5.499550, -167.276413), //Southwest
//   L.latLng(83.162102, -52.233040)  //Northeast
// );

// Creating map object
var myMap = L.map("map").setView([37.8,-96], 4);

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  tileSize: 512,
  id: "light-v9",
  zoomOffset:-1,
  accessToken: API_KEY
}).addTo(myMap);

var link ="https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
d3.json(link).then(function(data){
  console.log(data)
})

L.geoJson(statesData).addTo(map)