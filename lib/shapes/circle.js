// require parent class Shapes
const Shapes = require('../shapes.js')

class Circle extends Shapes {
    constructor(children) {
        super (children);
    }
    render() { // where actual svg is created
        return ''
    }
}