var Raphael = require('raphael')

function newPaper(diameter) {
  var container = document.createElement('div')
  container.style.borderRadius = '50px'
  container.style.overflow = 'hidden'
  container.style.padding = '0px'
  container.style.margin = '0px'
  container.style.width = '' + diameter + 'px'
  container.style.height = '' + diameter + 'px'
  container.style.display = 'inline-block'
  var paper = Raphael(container, 100, 100);
  return {
    paper: paper,
    container: container,
  }
}

module.exports = newPaper
