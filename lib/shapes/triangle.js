const Shapes = require('../shapes.js');

class Triangle extends Shapes {
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
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}
      
module.exports = Triangle;
    
