// where svg is created

// require shapesjs
const Circle = require('./shapes/circle.js')
const Square = require('./shapes/square.js')
const Triangle = require('./shapes/triangle.js')

function createSvg(text, textColor, shape, shapeColor) {
    const firstLine = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    console.log(shape)
    if (shape.toString() === 'Circle') {
        const circle = new Circle().render(text, textColor, shapeColor);
        return circle;
    } else if (shape.toString() === 'Triangle') {
        const triangle = new Triangle();
        console.log(triangle.setColor(shapeColor))
        return  `${firstLine}
${triangle.render()}
<text x="200" y="175" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    } else {
        const square = new Square().render(text, textColor, shapeColor);
        return square;
    }
}

// call render on correct shape
module.exports = { createSvg };
