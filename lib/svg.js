// where svg is created

// require shapesjs
const Circle = require('./shapes/circle.js')
const Square = require('./shapes/square.js')
const Triangle = require('./shapes/triangle.js')

function createSvg(text, textColor, shape, shapeColor) {
    console.log(shape)
    if (shape.toString() === 'Circle') {
        const circle = new Circle().render(text, textColor, shapeColor);
        return circle;
    } else if (shape.toString() === 'Triangle') {
        const triangle = new Triangle().render(text, textColor, shapeColor);
        return triangle;
    } else {
        const square = new Square().render(text, textColor, shapeColor);
        return square;
    }
}

// call render on correct shape
module.exports = { createSvg };
