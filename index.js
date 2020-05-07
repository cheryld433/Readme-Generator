const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');
//const api = require('./utils/api.js');


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
        message: 'What is your repository name?'
    },
    {
        type: "input",
        name: "title",
        message: "what is the project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What  are the installation instructions?'
    },

    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests?'
    },
    {
        type: 'input',
        name: 'usingRepo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who are the contributors?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'

    },
    {
        type: 'input',
        name: 'questions',
        message: 'If you have any questions about the repo, open an issue or contact Cheryl Daniels directly at '
    },

]);
}
function generateMarkdown(answers) {
    return`
    
    
    
    
    
    `
}

const writeFileAsync = util.promisify(fs.writeFile);
// function to prompt the user answers

promptUser()  //after you get the answers you need to generate the markdown, 
//write the answers on the markdown, successfully link to the markdown
  .then(function(answers) {
    const html = generateHTML(answers); //generateMarkdown

    return writeFileAsync("index.html", html); //link to page  goes here/
  })
  //console.log success an CATCH any errors.
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });


}


function init() {



}

init();
