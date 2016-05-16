var MersenneTwister = require('mersenne-twister');
var paperGen = require('./paper')
var Color = require('color')
var colors = require('./colors')

// Parameters
var shapeCount = 7
var colorWobble = 45
var maxWidth = 1000
var angleMod = 3
var possibleRotations = 21
var excessShown = 2

module.exports = generateIdenticon

var generator
function generateIdenticon(diameter, seed) {
  console.log(`GENERATING IDENTICON ${seed}`)
  generator = new MersenneTwister(seed);

  var elements = paperGen(diameter)
  var paper = elements.paper
  var container = elements.container

  var remainingColors = hueShift(colors.slice(), generator)

  var diam = diameter
  var str = `M 0,0 L ${diam},0 L ${diam},${diam} L 0,${diam} L 0,0`
  var bkgnd = paper.path(str);
  bkgnd.attr("fill", genColor(remainingColors));
  bkgnd.attr('stroke', 'none');

  for(var i = 0; i < shapeCount - 1; i++) {
    newGenShape(paper, remainingColors, diameter, i, shapeCount - 1)
  }

  return container
}

function newGenShape(paper, remainingColors, diam, i, total) {
  var mult = (generator.random() * 90) + 45
  var width = mult * maxWidth

  var rad = mult / 2

  var d = diam.toFixed(2)
  var str = `M 0,0 `
  str += `L ${d*2},${((d*generator.random()*angleMod) - d*(angleMod/2)).toFixed(2)} `
  str += `L ${d*2},${d*2} `
  str += `L 0,${d*2} `
  str += `L 0,0 `
  console.log(str)

  var shape = paper.path(str);

  var transRange = diam / total
  var fixed = transRange * (i + excessShown)

  var transX = fixed + (transRange * generator.random() * i)
  var transY = fixed + (transRange * generator.random() * i)

  console.log(JSON.stringify({
    transRange,
    fixed,
    transX,
    transY,
  }, null, 2))

  shape.rotate(360 / ((generator.random() * possibleRotations) % possibleRotations), rad, rad)
  shape.translate(transX, transY)

  //shape.rotate(180* generator.random(), rad, rad)

  shape.attr('fill', Color(genColor(remainingColors)).alpha(1.0).rgbString());
  shape.attr('stroke', 'none');
}

function genShape(paper, remainingColors, diam, i, total) {
  var str = `M 0,0 L ${diam},0 L ${diam},${diam} L 0,${diam} L 0,0`
  var shape = paper.path(str);

  shape.rotate(360 * generator.random())

  var trans = diam / total * generator.random() + (i * diam / total)
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

function hueShift(colors, generator) {
  var amount = (generator.random() * colorWobble) - (colorWobble / 2)
  return colors.map(function(hex) {
    var color = Color(hex)
    color.rotate(amount)
    return color.hexString()
  })
}
