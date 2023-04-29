const Shapes = require('../shapes.js');

class Square extends Shapes {
    constructor(children) {
        super (children);
        this.shapeColor = "";
    }
    // adds shape color to the shape (triangle) object
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
      }
      // creates second line of svg file
    render() { 
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`

    }
}

module.exports = Square;