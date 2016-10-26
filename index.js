var MersenneTwister = require('mersenne-twister');
var paperGen = require('./paper')
var Color = require('color')
var colors = require('./colors')
var shapeCount = 4
var svgns = 'http://www.w3.org/2000/svg'

module.exports = generateIdenticon

var generator
function generateIdenticon(diameter, seed) {
  generator = new MersenneTwister(seed);
  var remainingColors = hueShift(colors.slice(), generator)

  var elements = paperGen(diameter, genColor(remainingColors))
  var paper = elements.paper
  var container = elements.container

  for(var i = 0; i < shapeCount - 1; i++) {
    genShape(paper, remainingColors, diameter, i, shapeCount - 1, container)
  }

  return container
}

function genShape(paper, remainingColors, diameter, i, total, container) {
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

var wobble = 30
function hueShift(colors, generator) {
  var amount = (generator.random() * 30) - (wobble / 2)
  return colors.map(function(hex) {
    var color = Color(hex)
    color.rotate(amount)
    return color.hexString()
  })
}
