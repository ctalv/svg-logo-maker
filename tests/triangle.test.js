const Triangle = require('../lib/shapes/triangle.js')



describe('Triangle', () => {
    describe('shape', () => {
        it('should throw error if render() is called', () => {
            const shape = new Triangle();
            
            expect(shape.render("BTA", "green", "blue")).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="200,50 300,200 100,200" fill="blue" />

<text x="200" y="175" font-size="60" text-anchor="middle" fill="green">BTA</text>

</svg>`);
        });
    });
});