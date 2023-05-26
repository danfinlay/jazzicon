# `@metamask/jazzicon`

**[⭐️ View demo](https://metamask.github.io/jazzicon/)**

Say goodbye to boring, blocky identicons that look like they came out of the '70s and replace them with jazzy, colorful collages that more likely came out of the '80s!

<p align="center"><img src="example.png" width="600" /></p>

## Installation

`npm install @metamask/jazzicon`

## Usage

This library exports a single function which:

- takes two numbers, the diameter of the icon in pixels and a seed for randomly generating patterns
- gives you back a DOM element representing the icon to use as you wish

For example:

```javascript
const jazzicon = require('@metamask/jazzicon');

// Generate 60 icons
for (let i = 0; i < 60; i++) {
  // Use 100px as the diameter for each icon and a random number for the seed
  const icon = jazzicon(100, Math.round(Math.random() * 10000000));
  // Add the new icon to the page
  document.body.appendChild(icon);
}
```

## Generating the demo

You can generate and run the demo locally by running `npm run build-demo`, then opening `demo-build/index.html` in your browser.
