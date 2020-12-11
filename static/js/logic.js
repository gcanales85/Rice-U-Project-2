
var uedata;
var url = "/api/states";
d3.json(url).then(function (response) {
    // let min = 100, max = -1;
    // console.log(response);
    // response.forEach(obj => {
    //     Object.values(obj).forEach(v => {
    //         min = (min > v) ? v : min; //if min is greated than v then set min to v, otherwise leave min alone
    //         max = (max < v) ? v : max;
    //     })
    // })
    // console.log(min, max);
    uedata = response;



// Creating map object (under "map" / AK, HI will ahve to be other maps)
var myMap = L.map("map").setView([38.809, -98.5556199], 5);

// Color mapping (will be based on unemployment numbers)
function getColor(d) {
  return d > 8.9 ? '#04386e' :
         d > 6.9 ? '#2776b0' :
         d > 4.9 ? '#5a9ec7' :
         d > 2.9 ? '#9dd0eb' :
                   '#d5e5f5 ';
}


// Datafile with state borders
// var link = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
var link = "../static/data/statesdata.json";

var layer;
// Create map using GeoJson
function getRate(ue){
d3.json(link).then(function (data) {
  // console.log(data);
  var geojson;
  geojson = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(myMap);

  // Styling of map
  
  function style(s) {
    let state = s.properties.name;
    let statedata = uedata.filter(obj => state === obj.State)[0];
    let date = ue;
    // console.log(ue)
    console.log(state)
    // console.log(statedata[date])

    return {
        fillColor: getColor(statedata[date]),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
    
  }

  console.log(statedata[date])
  function highlight(e) {
    var layer = e.target;
  
    layer.setStyle({
      weight: 5,
      fillColor: '#e8dc2e',
      color: '#636161',
      dashArray: '',
      fillOpacity: 0.7
    });
  
    // layerPopup = L.popup()
    //   .setLatLng(e.latlng)
    //   .setContent(unempRate(e))
    //   .openOn(myMap)


    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge){
      layer.bringToFront();
    }
  }
  
  function resetHighlight(e){
    geojson.resetStyle(e.target);
  }
  
  function zoomToFeature(e) {
    myMap.fitBounds(e.target.getBounds());
  }
  
  function onEachFeature(feature, layer) {
    let state = feature.properties.name;
    let statedata = uedata.filter(obj => state === obj.State)[0];
    let date = ue;
    
    layer.on({
        mouseover: highlight,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
   

    layer.bindTooltip("<h1>" + feature.properties.name + "</h1> <br> <h2>" + statedata[date] + "</h2>") 
    // console.log(feature.properties.name)
  }


  })

// Add Legend
  var legend = L.control({position: 'bottomright'}); 

  legend.onAdd = function(){
    var div = L.DomUtil.create("div", "info legend");
    var grades = [0, 3, 5, 7, 9];
    var colors = [
      '#d5e5f5',
      '#9dd0eb',
      '#5a9ec7',
      '#2776b0',
      '#04386e',      
    ];
  

  for (var i=0; i < grades.length; i++){
    div.innerHTML +=
    "<i style='background: " + colors[i] + "'></i> " +
    grades[i] + (grades[i +1] ? "&ndash;" + grades[i +1] + "<br>" : "+")
  }
  return div;

  
}
  legend.addTo(myMap)
}

getRate("20-Sep")
});

