// require inqurer, fs, and jest
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { createSvg } = require('./svg')
const { colorNames } = require('../lib/colors')
const letters = Array.from('ABCDEF');
const nums = Array.from('1234567890');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter a three letters for your logo.',
        validate: (text) => {
            if (text.length === 0) {
                console.log(0);
            } else if (text.length > 3) {
                console.log('to large');
            } else {
                return true;
            }
        
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your logo text.',
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: 'Select a shape.',
        choices: ['Triangle','Circle','Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your icon.',
    },
]


class CLI {
    constructor() {

    }

    init() {
        inquirer
        .prompt (questions)
        .then((answers) => {
            return fs.writeFile(
                path.join(__dirname, '..', 'examples', 'logo.svg'),
                createSvg(answers.text, answers.textColor, answers.shape, answers.shapeColor),
                function (err,data) {if(err) console.log('error', err)}
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
