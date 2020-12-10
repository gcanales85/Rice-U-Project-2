
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
});


// Creating map object (under "map" / AK, HI will ahve to be other maps)
var myMap = L.map("map").setView([38.809, -98.5556199], 5);

// Color mapping (will be based on unemployment numbers)
function getColor(d) {
    return d > 14 ? '#800026' :
        d > 12 ? '#BD0026' :
            d > 10 ? '#E31A1C' :
                d > 8 ? '#FC4E2A' :
                    d > 6 ? '#FD8D3C' :
                        d > 4 ? '#FEB24C' :
                            d > 2 ? '#FED976' :
                                '#FFEDA0';
}

// Datafile with state borders
// var link = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
var link = "../static/data/statesdata.json";

// Create map using GeoJson


d3.json(link).then(function (data) {
    // console.log(data);
    L.geoJson(data, {
        style: style
    }).addTo(myMap);

    // Styling of map
    function style(feature) {
        let state = feature.properties.name;
        let statedata = uedata.filter(obj => state === obj.State)[0];
        let date = "20-May";

        return {
            fillColor: getColor(statedata[date]),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

})

// document.getElementById('slider').addEventListener('change', function (e) {
//     var hour = parseInt(e.target.value);
//     // update the map
//     map.setFilter('collisions', ['==', ['number', ['get', 'Hour']], hour]);

//     // converting 0-23 hour to AMPM format
//     var ampm = hour >= 12 ? 'PM' : 'AM';
//     var hour12 = hour % 12 ? hour % 12 : 12;

//     // update text in the UI
//     document.getElementById('active-hour').innerText = hour12 + ampm;
// });