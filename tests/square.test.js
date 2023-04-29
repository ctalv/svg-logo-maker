const Square = require('../lib/shapes/square.js')

test('should throw error if render() is called', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue" />');
})
