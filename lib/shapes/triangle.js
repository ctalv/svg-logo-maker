// require parent class Shapes
const Shapes = require('../shapes.js');
const { colorNames } = require('../colors.js')

class Triangle extends Shapes {
    constructor(children) {
        super (children);
    }


    render(text, textColor, shapeColor) { 

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="200,50 300,200 100,200" fill="${shapeColor}" />

    <text x="200" y="175" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

  </svg>`
        
    }
}

module.exports = Triangle;