// require parent class Shapes
const Shapes = require('../shapes.js');

class Triangle extends Shapes {
    constructor(children) {
        super (children);
    }

    render(text, textColor, shapeColor) { 
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="200,10 250,190 160,210" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>

  </svg>`
        
    }
}

module.exports = Triangle;