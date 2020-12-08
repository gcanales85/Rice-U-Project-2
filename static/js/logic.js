
// Creating map object (under "map" / AK, HI will ahve to be other maps)
var myMap = L.map("map").setView([38.809,-98.5556199], 5);

// Color mapping (will be based on unemployment numbers)
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

// Datafile with state borders
// var link = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
var link ="static/data/statesdata.json"; 

// Create map using GeoJson
d3.json(link).then(function(data){
  // console.log(data);
  L.geoJson(data, {
    style: style
  }).addTo(myMap);
  
// Styling of map
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

})



