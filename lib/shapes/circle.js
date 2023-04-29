const Shapes = require('../shapes.js');

class Circle extends Shapes {
    constructor(children) {
        super (children);
        this.shapeColor = "";
    }
    // adds shape color to the shape (circle) object
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
      }
      // creates second line of svg file
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }

}

module.exports = Circle;