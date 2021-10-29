const date = new Date().getFullYear();

const generateTests = templateData => {
  if(!templateData.testing) {
    return '';
  }
  return `## Tests 
  ${templateData.testing} `;
};
const generateContributing = templateData => {
  if(!templateData.contributing) {
    return '';
  }
  return `## Contributing 
  ${templateData.contributing} `;
};
const generateLicense = templateData => {
  if(!templateData.licenses.length) {
    return '';
  }
  else return `## Licenses
  ${templateData.licenses}`
}
const generateLicenseInfo = templateData => {
  if(!templateData.licenses.length) {
    return '';
  } 
  else if (templateData.licenses.includes('GNU General Public License')) {
    return `Copyright ${date} ${templateData.gitHub} </br>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>`;
  }
  else if (templateData.licenses.includes('MPL Mozilla Public License')) {
    return `Copyright ${date} ${templateData.gitHub} </br>

    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`;
  }
  else if (templateData.licenses.includes('MIT License')) {
    return `Copyright ${date} ${templateData.gitHub} </br>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    https://mit-license.org/`;
  }
  else if (templateData.licenses.includes('Unlicense')) {
    return `Copyright Notice ${date} ${templateData.gitHub} under The Unlicense License: </br>
    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.
    
    In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    https://unlicense.org/`;
  }
}
const generateEmail = templateData => {
  if(!templateData.email) {
    return '';
  }
  return `You can reach me with any addtional questions at: ${templateData.email}`;
};



module.exports = templateData => {
  console.log(templateData);

  return `
  # ${templateData.title}

  ## Description
  ${templateData.description}

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${templateData.installation}

  ## Usage
  ${templateData.usage}

  ${generateLicense(templateData)}
  ${generateLicenseInfo(templateData)}

  ${generateContributing(templateData)}

  ${generateTests(templateData)}

  ## Questions
  You can find my github at: https://github.com/${templateData.gitHub} </br>
  ${generateEmail(templateData)}
  `;
}




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}


