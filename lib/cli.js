// require inqurer, fs, and jest
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { createSvg } = require('./svg')

class CLI {
    constructor() {

    }
    init() {
        inquirer
        .prompt ([
            {
                type: 'input',
                name: 'text',
                message: 'Enter a three letters for your logo.',
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
        ])
        .then((answers) => {
            // console.log(text)
            return fs.writeFile(
                path.join(__dirname, '..', 'examples', 'output.svg'),
                createSvg(answers.text, answers.textColor, answers.shape, answers.shapeColor),
                function (err,data) {if(err) console.log('error', err)}
              );
            
        })
        .catch((err) => {
            console.error(err);
            console.log(__dirname)
        })
    }
}

module.exports = CLI;
