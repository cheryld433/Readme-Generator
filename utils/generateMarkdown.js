const generateMarkdown = data => {
  return JSON.stringify(data);
  return `



  
# ${ data.title } 



![License: ${(data.license) ? data.license: 'None'}](https://img.sheilds.io/badge/License-${(data.license) ? data.license: 'None'}-brightgreen)

_#Repository by ${data.name}_


__##${data.description}__


_###Installation:_
${data.dependencies}












`;
//// generate just like a read me file 

//installation
// usage
// contributors
//tests
//questions
// avatar

}

module.exports = generateMarkdown
