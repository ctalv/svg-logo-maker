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
        ])
        
    }
}

module.exports = CLI;
