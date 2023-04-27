// require parent class Shapes
const Shapes = require('../shapes.js')

class Square extends Shapes {
    constructor(children) {
        super (children);
    }
    render() { // where actual svg is created
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="300" height="100" fill="green" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

      </svg>`;
    }
}

module.exports = Square;