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
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})