const Triangle = require('../lib/shapes/triangle.js')

test('should throw error if render() is called', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})