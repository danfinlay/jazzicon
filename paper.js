function newPaper(diameter, color) {
  var container = document.createElement('div')
  container.className = 'identicon'
  container.style.borderRadius = '50%'
  container.style.overflow = 'hidden'
  container.style.width = '' + diameter + 'px'
  container.style.height = '' + diameter + 'px'
  container.style.display = 'block'
  container.style.background = color
  return {
    container: container,
  }
}

module.exports = newPaper
