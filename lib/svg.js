// where svg is created

// require shapesjs
// const Shape = require('./shapes')
const circle = require('./shapes/circle.js')
const square = require('./shapes/square.js')
const triangle = require('./shapes/triangle.js')

function createSVG(text, textColor, shape, shapeColor)
// call render on correct shape