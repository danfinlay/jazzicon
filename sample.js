var jazzicon = require('./')

var body = document.querySelector('body')
for(var i = 0; i < 600; i++) {
  var el = jazzicon(100, Math.round(Math.random() * 10000000))
  body.appendChild(el)
}
