const Circle = require('./shapes/circle.js')
const Square = require('./shapes/square.js')
const Triangle = require('./shapes/triangle.js')

// checks what shape was inputed and generates the svg text
function createSvg(text, textColor, shape, shapeColor) {
    // first line of svg file (same regardless of shape)
    const firstLine = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'

    // for circle
    if (shape.toString() === 'Circle') {
        const circle = new Circle();
        circle.setColor(shapeColor)
        return `${firstLine}
${circle.render()}
<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

        // for triangle
    } else if (shape.toString() === 'Triangle') {
        const triangle = new Triangle();
        triangle.setColor(shapeColor)
        return `${firstLine}
${triangle.render()}
<text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

        // for square
    } else {
        const square = new Square();
        square.setColor(shapeColor)
        return `${firstLine}
${square.render()}
<text x="100" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
    }
}

module.exports = { createSvg };
