var stateInfo = "../static/data/StatesInfo.json";

d3.json(stateInfo).then((data) => {
    console.log(data.states);


    x_values = data.states.Date
    y_values = data.states.Rate

    // Part 3 - Line Chart
    var trace1 = {
        x: x_values,
        y: y_values,
        type: "line"
    };

    var data = [trace1];

    var layout = {
        title: "'Bar' Chart",
    };

    Plotly.newPlot("plot1", data, layout);

});