var now = moment();
var todaysDateEl = now.format('MMMM Do YYYY');
$("#currentDay").text(todaysDateEl);

var currentTimeEL = now.format("H");
