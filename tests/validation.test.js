const Validate = require('../lib/validation.js');

test('if color is a named color, should be true', () => {
    const validate = new Validate('NA','blue','NA');
    
    expect(validate.colorTextValidation()).toBe(true);
})