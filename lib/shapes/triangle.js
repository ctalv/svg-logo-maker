// require parent class Shapes
const Shapes = require('../shapes.js');

class Triangle extends Shapes {
    constructor(children) {
        super (children);
    }
    render() { // where actual svg is created
        
    }
}

module.exports = Triangle;