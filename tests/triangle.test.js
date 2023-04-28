const Triangle = require('../lib/shapes/triangle.js')

const shape = new Triangle();
// describe('Triangle', () => {
//     describe('triangle', () => {
//         it('should throw error if render() is called', () => {
//             shape.setColor("blue");
//             expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
//         })
//     })
// })

test('should throw error if render() is called', () => {

    shape.render("BTA","green","blue");
    expect(shape.render()).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="200,50 300,200 100,200" fill="green" />

<text x="200" y="175" font-size="60" text-anchor="middle" fill="blue">BTA</text>

</svg>`);
})