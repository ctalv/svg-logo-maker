const Triangle = require('../lib/shapes/triangle.js')

// test('should throw error if render() is called', () => {
//             const shape = new Triangle();

//             expect(shape.render("BTA", "green", "blue")).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <polygon points="200,50 300,200 100,200" fill="blue" />

// <text x="200" y="175" font-size="60" text-anchor="middle" fill="green">BTA</text>

// </svg>`);

// });

test('should throw error if render() is called', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})