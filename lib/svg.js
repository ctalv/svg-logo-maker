// where svg is created

// require shapesjs
// // const Shape = require('./shapes')
const Circle = require('./shapes/circle.js')
const Square = require('./shapes/square.js')
const Triangle = require('./shapes/triangle.js')

function createSvg(text, textColor, shape, shapeColor) {
    console.log(this.text,textColor,shapeColor)
    if (shape === 'Circle') {
        console.log(shape)
    } else if (shape === 'Triangle') {
        console.log(shape)
    } else {
        console.log(shape)
    }
}


module.exports = { createSvg };
// call render on correct shape