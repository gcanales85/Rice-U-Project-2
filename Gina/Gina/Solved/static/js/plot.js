// Part 1

// in Plotly, trace refers to an object that contains 1) data to be plotted, and 2) specifications for plotting.
var trace1 = {
  x: ["Oct-10", "Nov-10","Dec-10","Jan-11","Feb-11", "Mar-11", "Apr-11", "May-11","Jun-11","Jul-11","Aug-11","Sep-11","Oct-11","Nov-11","Dec-11",
  "Jan-12","Feb-12", "Mar-12", "Apr-12", "May-12","Jun-12","Jul-12","Aug-12","Sep-12","Oct-12","Nov-12", "Dec-12",
  "Jan-13","Feb-13", "Mar-13", "Apr-13", "May-13","Jun-13","Jul-13","Aug-13","Sep-13","Oct-13","Nov-13", "Dec-13",
  "Jan-14","Feb-14", "Mar-14", "Apr-14", "May-14","Jun-14","Jul-14","Aug-14","Sep-14","Oct-14","Nov-14", "Dec-14",
  "Jan-15","Feb-15", "Mar-15", "Apr-15", "May-15","Jun-15","Jul-15","Aug-15","Sep-15","Oct-15","Nov-15", "Dec-15",
  "Jan-16","Feb-16", "Mar-16", "Apr-16", "May-16","Jun-16","Jul-16","Aug-16","Sep-16","Oct-16","Nov-16", "Dec-16",
  "Jan-17","Feb-17", "Mar-17", "Apr-17", "May-17","Jun-17","Jul-17","Aug-17","Sep-17","Oct-17","Nov-17", "Dec-17",
  "Jan-18","Feb-18", "Mar-18", "Apr-18", "May-18","Jun-18","Jul-18","Aug-18","Sep-18","Oct-18","Nov-18", "Dec-18",
  "Jan-19","Feb-19", "Mar-19", "Apr-19", "May-19","Jun-19","Jul-19","Aug-19","Sep-19","Oct-19","Nov-19", "Dec-19",
  "Jan-20","Feb-20", "Mar-20", "Apr-20", "May-20","Jun-20","Jul-20","Aug-20","Sep-20","Oct-20"],
  y: [8.75, 8.71,8.67,8.59,8.52,8.45,8.42,8.39,8.38,8.37,8.32,8.24,8.13,8.02,7.9,7.78,7.69,7.63,7.61,
    7.59,7.56,7.5,7.44,7.38,7.34,7.31,7.28,7.25,7.2,7.15,7.08,7.01,6.96,6.9,6.84,6.75,6.67,6.58,6.5,6.39,
    6.3,6.2,6.11,6.04,5.96,5.88,5.82,5.75,5.68,5.59,5.5,5.43,5.39,5.36,5.32,5.27,5.2,5.14,5.08,5.02,
    4.98,4.95,4.93,4.91,4.88,4.88,4.86,4.85,4.85,4.83,4.8,4.78,4.75,4.7,4.64,4.57,4.5,4.43,4.36,4.34,
    4.28,4.28,4.24,4.23,4.19,4.15,4.11,4.08,4.05,4.01,3.98,3.94,3.9,3.85,3.82,3.8,3.8,3.81,3.82,3.82,
    3.8,3.77,3.75,3.71,3.68,3.67,3.66,3.66,3.67,3.66,3.67,3.65,3.62,4.15,14.18,12.28,9.81,9.17,7.78,7.26,6.41],
  type: "line"
};

// our trace is enclosed within an Array because you will later see that we can have multiple traces for a plot.
var data = [trace1];

// layout is optional, but contains chart title, axis information, and any other custom layout behavior
var layout = {
  title: "USA unemployment rates over the last 10 years"
};

// the first argument below ("plot") refers to the id of the div where the play will be displayed
// the second argument refers to our trace
// the third argument is optional. It refers to the chart's layout details.
Plotly.newPlot("plot", data, layout);





// // Part 2 - Adding attributes
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
//   xaxis: { title: "Drinks"},
//   yaxis: { title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plot", data, layout);





// // Part 3 - Line Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "line"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);




// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);





// // Part 5 - Working Pie Chart
// var trace1 = {
//   labels: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: 'pie'
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);


