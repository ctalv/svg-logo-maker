const Circle = require('../lib/shapes/circle.js')

test('should throw error if render() is called', () => {
    const shape = new Circle();

    expect(shape.render("BTA", "green", "blue")).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="blue" />
                  
<text x="150" y="120" font-size="60" text-anchor="middle" fill="green">BTA</text>
                  
</svg>`);

});