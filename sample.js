var jazzicon = require('./jazzicon')

var body = document.querySelector('body')
for(var i = 0; i < 60; i++) {
  var el = jazzicon(100, Math.round(Math.random() * 10000000))
  body.appendChild(el)
}

/* To convert a hex address to an int:
 *
  var addr = address.slice(2, 10)
  var seed = parseInt(addr, 16)
*/
