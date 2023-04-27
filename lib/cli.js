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
        .then(() => console.log('Answered prompts!'))
        .catch((err) => {
            console.error(err);
            console.log('Uh oh! Something went wrong!')
        })
    }
}

module.exports = CLI;
