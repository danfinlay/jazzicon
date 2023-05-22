# Jazzicon
## Jazzy Identicons

[Live Example](http://requirebin.com/?gist=64341df46d79cc72567417c022e9d0ee)

Say goodbye to boring blocky identicons that look like they came out of the 70s, and replace them with jazzy, colorful collages that more likely came out of the 80's.

![example](./example.png)

## Installation

```
npm install @metamask/jazzicon
```

## Usage

Takes a pixel diameter and a javascript integer (seeds the shape), and gives you back a DOM element to use as you wish!

```javascript
var jazzicon = require('jazzicon')

var body = document.querySelector('body')
for(var i = 0; i < 60; i++) {
  var el = jazzicon(100, Math.round(Math.random() * 10000000))
  body.appendChild(el)
}
```

## Demo

You can run a demo by running `npm run build-demo`, then opening `demo-build/index.html` in your browser.
