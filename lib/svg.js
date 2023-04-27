// where svg is created

// require shapesjs
const Circle = require('./shapes/circle.js')
const Square = require('./shapes/square.js')
const Triangle = require('./shapes/triangle.js')

function createSvg(text, textColor, shape, shapeColor) {
    console.log(shape)
    if (shape.toString() === 'Circle') {
        const circle = new Circle();
        return circle.render(text, textColor, shapeColor);
    } else if (shape.toString() === 'Triangle') {
        const triangle = new Triangle().render(text, textColor, shapeColor);
        return triangle;
    } else {
        const square = new Square().render();
        return square;
    }
}

// call render on correct shape
module.exports = { createSvg };
