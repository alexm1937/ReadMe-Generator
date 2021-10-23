const generateTests = templateData => {
  if(!templateData.testing) {
    return '';
  }
  return `## Tests 
  ${templateData.testing}
  `;
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

  ## License

  ## Contributing
  ${templateData.contributing}

  ${generateTests(templateData)}

  ## Questions
  You can find my github at: https://github.com/${templateData.gitHub} </br>
  You can reach me with additional questions at: ${templateData.email}
  `;
}



  // ## Tests
  // ${templateData.testing}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {


// module.exports = generateMarkdown;
