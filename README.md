# Jazzicon
## Jazzy Identicons

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

## Example

You can run an example by installing beefy (`npm i -g beefy`) and then running `npm run sample`.
