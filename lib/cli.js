// require inqurer, fs, and jest
const inquirer = require('inquirer');
// const createSvg = require('./svg')

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
        ])
        .then(() => console.log(`Answered! ${this.text} is ${this.textColor}`))
        .catch((err) => {
            console.error(err);
            console.log('Uh oh! Something went wrong!')
        })
    }
}

module.exports = CLI;
