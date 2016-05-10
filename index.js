var Raphael = require('raphael')
var paper = Raphael(0, 0, 200, 200);

var colors = [
	'#01888C', // teal
  '#FC7500', // bright orange
  '#034F5D', // dark teal
  '#F73F01', // orangered
  '#FC1960', // magenta
  '#C7144C', // raspberry
  '#F3C100', // goldenrod
  '#034F5D', // lightning blue
  '#2465E1', // sail blue
  '#F19E02', // gold
]

var circle = paper.circle(100, 100, 100);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");