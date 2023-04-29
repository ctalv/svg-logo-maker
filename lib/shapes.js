// shapes class should render the svg with the color
class Shapes {
    constructor(children = []) {
        this.children = children   
    }
    // force method to be implemented by child classes that extend the Shapes class
    // ie: Triange, Circle, Square
    setColor() {
      return this.children
      // creates a new array populated with the results of calling a provided function on every element in the calling array (from MDN)
      .map((child) => {
        return child.render();
      })
      }

    render() {
        throw new Error('Child class must implement a render() method.');
      }

}


module.exports = Shapes;