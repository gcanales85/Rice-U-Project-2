// Set Bounds so map is US
// var maxBounds = L.latLngBounds(
//   L.latLng(5.499550, -167.276413), //Southwest
//   L.latLng(83.162102, -52.233040)  //Northeast
// );

var southWest = L.latLng(40.712, -74.227);
var northEast = L.latLng(40.774, -74.125);
var myBounds = L.latLngBounds(southWest, northEast);

// Creating map object
var myMap = L.map("map").setView([38.809,-98.5556199], 5);
// Adding tile layer
// L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   tileSize: 512,
//   bounds: myBounds,
//   id: "light-v9",
//   maxZoom: 18,
//   accessToken: API_KEY
// }).addTo(myMap);

// L.marker([40.712, -74.227]).addTo(myMap);
// L.marker([40.774, -74.125]).addTo(myMap);

function getColor(d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}

var link = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"


// var link ="static/data/statesdata.geojson"; 
d3.json(link).then(function(data){
  // console.log(data);
  L.geoJson(data, {
    style: style
  }).addTo(myMap);
  

  function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

}); 

var myMap2 = L.map("map2").setView([38.809,-98.5556199], 5);

d3.json(link).then(function(data){
  // console.log(data);
  L.geoJson(data, {
    style: style
  }).addTo(myMap2);
  

  function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

}); 



