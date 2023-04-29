// where svg is created

// require shapesjs
const Circle = require('./shapes/circle.js')
const Square = require('./shapes/square.js')
const Triangle = require('./shapes/triangle.js')

function createSvg(text, textColor, shape, shapeColor) {
    const firstLine = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'

    if (shape.toString() === 'Circle') {
        const circle = new Circle();
        circle.setColor(shapeColor)
        return `${firstLine}
${circle.render()}
<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    } else if (shape.toString() === 'Triangle') {
        const triangle = new Triangle();
        triangle.setColor(shapeColor)
        return `${firstLine}
${triangle.render()}
<text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    } else {
        const square = new Square();
        square.setColor(shapeColor)
        return `${firstLine}
${square.render()}
<text x="100" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}

// call render on correct shape
module.exports = { createSvg };
