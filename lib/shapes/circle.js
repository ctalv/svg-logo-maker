// require parent class Shapes
const Shapes = require('../shapes.js');

class Circle extends Shapes {
    constructor(children) {
        super (children);
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }

}

module.exports = Circle;