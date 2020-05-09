const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown.js')

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + '.md', data, error => 
  error ? console.log(error) : console.log(`${fileName + '.md'} generated!`))
}

const init = async () => {
  let readMeObj = {}

  Object.assign(readMeObj, await prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?'
    },
    {
      type: 'input',
      name: 'desc',
      message: 'What is the project description?'
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the installation instructions?', 
      default: 'npm install'
    }, 
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage description?'
    },
    {
       type: 'list',
       name: 'lic',
       message: 'What is the license?',
       choices: [
         "MIT",
         "APACHE",
         "GPL",
         "BSD",
         "None"
        ]
    },
    {
      type: 'input',
      name: 'cont',
      message: 'Who are the contributors?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the tests?'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Any questions?'
    }
  ]))
  writeToFile(readMeObj.title, await generateMarkdown(readMeObj))
}

init()
