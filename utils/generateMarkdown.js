const generateMarkdown = data => {
  return `
# ${ data.title.toUpperCase()}

![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'}-brightgreen)

## Description: 
${ data.desc }

## Table of Content:
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributors](#contributors)

  * [Tests](#tests)

  * [Questions](#questions)


## Installation:
${data.install}

## Usage:
${data.usage}

## Contributors:
${data.cont}

## Tests:
${data.test}

#### Questions:
${data.questions}
`;
}



module.exports = generateMarkdown;




