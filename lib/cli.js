// require inqurer, fs, and jest
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { createSvg } = require('./svg')
const { colorNames } = require('../lib/colors')
const upper = Array.from('ABCDEF');
const lower = Array.from('abcdef')
const nums = Array.from('1234567890');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo.',
        validate: (text) => {
            if (text.length === 0) {
                return 'Please enter at least one character.';
            } else if (text.length > 3) {
                return 'No more than three characters allowed.';
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your logo text.',
        validate: (textColor) => {
            const color = textColor
            const hex = Array.from(color)
            if (Object.keys(colorNames).includes(color)) {
                return true
            } else if ((hex[0] === '#') && (hex.length === 7)) {
                for (let i = 1; i < hex.length; i++) {
                    const char = hex[i];
                    if (nums.includes(char) || upper.includes(char) || lower.includes(char)) {
                    } else {
                        return 'Invalid hexadecimal code.'
                    }
                }
                return true
            } else {
                return 'Enter a color name or hexidecimal code, includung the #.'
            }
        },
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: 'Select a shape.',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your icon.',
        validate: (textColor) => {
            const color = textColor
            const hex = Array.from(color)
            if (Object.keys(colorNames).includes(color)) {
                return true
            } else if ((hex[0] === '#') && (hex.length === 7)) {
                for (let i = 1; i < hex.length; i++) {
                    const char = hex[i];
                    if (nums.includes(char) || upper.includes(char) || lower.includes(char)) {
                    } else {
                        return 'Invalid hexadecimal code.'
                    }
                }
                return true
            } else {
                return 'Enter a color name or hexidecimal code, includung the #.'
            }
        },
    },
]


class CLI {
    constructor() {

    }

    init() {
        inquirer
            .prompt(questions)
            .then((answers) => {
                return fs.writeFile(
                    path.join(__dirname, '..', 'examples', 'logo.svg'),
                    createSvg(answers.text, answers.textColor, answers.shape, answers.shapeColor),
                    function (err, data) { if (err) console.log('error', err) }
                );
            })
            .then(() => {
                console.log("Generated logo.svg!")
            })
            .catch((err) => {
                console.error(err);
                console.log(__dirname)
            })
    }

}

module.exports = CLI;
