// require parent class Shapes
const Shapes = require('../shapes.js');

class Square extends Shapes {
    constructor(children) {
        super (children);
        this.shapeColor = "";
    }
    setColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
    render() { // where actual svg is created
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`

    }
}

module.exports = Square;