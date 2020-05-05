const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/api.js');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'usingRepo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the luser need to know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If you have any questions about the repo, open an issue or contact Cheryl Daniels directly at '
    }

]);
function generateHTML(answers) {
    return `
    // PUT HTML HERE`
}



function init() {
    console.log()
    try{
        const answers = await promptUser();

    }

}

init();
