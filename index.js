var addressGen = require('./addressGen')
var identicon = require('./identicon')

var address = '0xbcbc412c234e169c0a7dc792e4542c2869659f21'

var els = []
for(var i = 0; i < 60; i++) {
  var el = identicon(paperGen(), addressGen(), 100)
  els.push(el)
}

module.exports = genIcon

function genIcon(diameter, seed) {
  return identicon(diameter, seed)
}
