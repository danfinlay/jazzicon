var jazzicon = require('./')

var body = document.querySelector('body')
for(var i = 0; i < 18; i++) {
  var el = jazzicon(100, i)
  body.appendChild(el)
}
