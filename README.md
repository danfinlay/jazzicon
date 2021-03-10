# Jazzy Identicons (jazzicon)

Say goodbye to boring blocky identicons that look like they came out of the 70s, and replace them with jazzy, colorful collages that more likely came out of the 80's.

![example](./example.png)

## Installation

```
npm install jazzicon -S
```

## Usage

Takes a pixel diameter and a javascript integer (seeds the shape), and gives you back a DOM element to use as you wish!

```typescript
import jazzicon from 'jazzicon'

const body = document.querySelector('body')

for (let i = 0; i < 60; i++) {
  body.appendChild(jazzicon(100, Math.round(Math.random() * 10000000)))
}
```
