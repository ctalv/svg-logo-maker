// require parent class Shapes
const Shapes = require('../shapes.js')

class Circle extends Shapes {
    constructor(children) {
        super (children);
    }
    render(text, textColor, shapeColor) { // where actual svg is created
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`
    }
}

module.exports = Circle;