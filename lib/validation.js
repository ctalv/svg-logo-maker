const { colorNames } = require('../lib/colors')

class Validate {
    constructor(input, colorT, colorS) {
        this.input = input;
        this.colorT = colorT;
        this.colorS = colorS;
    }

    textValidation() {
        console.log(this.input)
        if (this.input.length === 0) {
            console.log(0);
        } else if (this.input.length > 3) {
            console.log('to large');
        } else {
            console.log('good');
        }
    }


}

const validate = new Validate('VGT','blue','green')

return validate.textValidation()

module.exports = Validate;