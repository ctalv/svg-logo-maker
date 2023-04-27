// shapes class should render the svg with the color
class Shapes {
    constructor(children = []) {
        this.children = children   
    }
    // force method to be implemented by andu child classes that extend the Shapes class
    // ie: Triange, Circle, Square
    render() {
        throw new Error('Child class must implement a render() method.');
      }
    
}