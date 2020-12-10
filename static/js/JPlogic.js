



// Creating map object (under "map" / AK, HI will ahve to be other maps)
var myMap = L.map("map").setView([38.809, -98.5556199], 5);

// A RGB: 45 60 158 HEX: #2d3c9e Lab: 30.0548 28.4666 - 55.7140
// B RGB: 65 71 165 HEX: #4147a5 Lab: 34.7761 26.5734 - 52.0199
// C RGB: 95 94 177 HEX: #5f5eb1 Lab: 43.6941 22.9974 - 45.0421
// D RGB: 124 119 191 HEX: #7c77bf Lab: 53.3116 19.1410 - 37.5171
// E RGB: 148 142 202 HEX: #948eca Lab: 61.5302 15.8455 - 31.0867
// F RGB: 161 155 209 HEX: #a19bd1 Lab: 66.2515 13.9523 - 27.3926
// G RGB: 174 168 215 HEX: #aea8d7 Lab: 70.9728 12.0592 - 23.6985
// H RGB: 188 182 222 HEX: #bcb6de Lab: 75.6941 10.1660 - 20.0044

// 57, 84, 99
// 87,123,143
// 124,172,197
// 187,219,239
// 207,222,231



// Color mapping (will be based on unemployment numbers)
function getColor(d) {
    return d > 9 ? 'rgb(57, 84, 99)' :
        d > 7 ? 'rgb(87,123,143)' :
            d > 5 ? 'rgb(124,172,197)' :
                d > 3 ? 'rgb(187,219,239)' :
                    'rgb(207,222,231)';
}





// Datafile with state borders
// var link = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
var link = "../static/data/statesdata.json";


// Create map using GeoJson
d3.json(link).then(function (data) {
    // console.log(data);
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

        var geo = L.geoJson(data, {
            style: style
        }).addTo(myMap);

        // Styling of map
        function style(feature) {
            let state = feature.properties.name;
            let statedata = uedata.filter(obj => state === obj.State)[0];
            // console.log(statedata)
            let date = "10-Oct";

            return {
                fillColor: getColor(statedata[date]),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

        // the year in month names
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        // our target for all the year-months, initialized with the dates from 2010
        const dates = ["10-Oct", "10-Nov", "10-Dec"]

        // loop over all the years from 11 thru 20
        // add to the dates array (above)
        // map the months (an array of string names of months) to strings that have the year with a dash and the month names
        // flattens the array produced by the map into 12 elements that get added into the dates array
        for (let yr = 11; yr < 21; yr++) {
            dates.push(...months.map(m => yr + "-" + m))
        }



        document.getElementById('slider').addEventListener('change', function (e) {
            // (the value from 0 to 120)
            var value = parseInt(e.target.value);
            // looks up the string like "14-Mar and breaks into two strings in the array yrMon
            var yrMon = dates[value].split("-")
            // show the active date as a string the name of the month first,
            // then year including the 20 for the century
            document.getElementById('active-date').innerText = yrMon[1] + " 20" + yrMon[0];

            geo.eachLayer(layer => {
                let state = layer.feature.properties.name;
                let statedata = uedata.filter(obj => state === obj.State)[0];
                let date = dates[value]
                layer.setStyle({

                    fillColor: getColor(statedata[date]),


                })
            })
        });
    })
});