// shapes class should render the svg with the color
class Shapes {
    constructor(children = []) {
        this.children = children   
    }
    // force method to be implemented by child classes that extend the Shapes class
    // ie: Triange, Circle, Square
    // setColor() {
    //     throw new Error('Child class must implement a setColor() method.');
      // }
    render() {
        throw new Error('Child class must implement a render() method.');
      }

}


module.exports = Shapes;