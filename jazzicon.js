var MersenneTwister = require('mersenne-twister');
var paperGen = require('./paper')
var colors = require('./colors')
var shapeCount = 4

module.exports = generateIdenticon

var generator
function generateIdenticon(diameter, seed) {
  var elements = paperGen()
  var paper = elements.paper
  var container = elements.container

  var remainingColors = colors.slice()

  console.log("my seed is " + seed)
  generator = new MersenneTwister(seed);

  var bkgnd = paper.rect(0, 0, diameter, diameter);
  bkgnd.attr("fill", genColor(remainingColors));
  bkgnd.attr('stroke', 'none');

  for(var i = 0; i < shapeCount - 1; i++) {
    genShape(paper, remainingColors, diameter, i, shapeCount - 1)
  }

  return container
}

function genShape(paper, remainingColors, diameter, i, total) {
  var shape = paper.rect(0, 0, diameter, diameter);
  shape.rotate(360 * generator.random())

  var trans = diameter / total * generator.random() + (i * diameter / total)
  shape.translate(trans)

  shape.rotate(180 * generator.random())
  shape.attr('fill', genColor(remainingColors));
  shape.attr('stroke', 'none');
}

function genColor(colors) {
  var rand = generator.random()
  var idx = Math.floor(colors.length * generator.random())
  var color = colors.splice(idx,1)[0]
  return color
}
