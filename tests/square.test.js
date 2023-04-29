const Square = require('../lib/shapes/square.js')

test('should throw error if render() is called', () => {
    const shape = new Square();

    expect(shape.render("BTA", "green", "blue")).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect width="200" height="200" fill="blue" />
    
<text x="100" y="100" font-size="60" text-anchor="middle" fill="green">BTA</text>
    
</svg>`);

});
