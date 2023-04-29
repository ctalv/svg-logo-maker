const { colorNames } = require('../lib/colors')
const letters = Array.from('ABCDEF');
const nums = Array.from('1234567890');

class Validate {
    constructor(input, colorT, colorS) {
        this.input = input;
        this.colorT = colorT;
        this.colorS = colorS;
    }

    textValidation() {
        console.log(this.input)
        console.log(colorNames)
        console.log(Object.keys(colorNames))
        if (this.input.length === 0) {
            console.log(0);
        } else if (this.input.length > 3) {
            console.log('to large');
        } else {
            console.log('good');
        }
    }
    colorValidation() {
        const hex = Array.from(this.colorT)
        if (Object.keys(colorNames).includes(this.colorT)) {
            console.log('nice choice')
        } else if ((hex[0] === '#') && (hex.length === 7)) {

            for (let i = 1; i < hex.length; i++) {
                const char = hex[i];
                if (nums.includes(char) || letters.includes(char)) {
                    console.log('yay!')
                } else {
                    console.log('not a valid hexadecimal code')
                }
            }

        } else {
            console.log('nope')
        }
    }



}

const validate = new Validate('VGT', '#34ACFA', 'green')

return validate.colorValidation()

module.exports = Validate;