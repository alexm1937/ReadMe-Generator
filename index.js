//required to run app
const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
//const questions = [];

const promptProject = projectData => {
    console.log(`
        ======================
        Generate a new ReadMe!
        ======================
    `)
    if (!projectData) {
        projectData = [];
    }
    return inquirer.prompt([
        //title
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        //description
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        //Installation Instructions
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions on how to install the project (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please enter your project installation instructions!');
                    return false;
                }
            }
        },
        //Usage info - what and how to use
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for, and how do we use it? (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please tell us how to use the project!');
                    return false;
                }
            }
        },
        //contributing
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter instructions on how to contribute to the project (Required)',
            validate: contributingInput => {
                if(contributingInput) {
                    return true;
                } else {
                    console.log('Please enter instructions on how you would like people to contribute!');
                    return false;
                }
            }
        },
        //How to test app?
        {
            type: 'input',
            name: 'testing',
            message: 'Enter instructions on how to test this project (Optional)'
        },
        //LICENSES GO HERE

        //Github username
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub Username (Required)',
            validate: gitHubInput => {
                if(gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        //email
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        }
    ])
    .then(projectData => {
        //portfolioData.push(projectData);
        const pageMD = generateREADME(projectData);
        const title = projectData.title + "README" + ".md";
        fs.writeFile("./generated-readme/" + title, pageMD, err => {
            if(err) throw new Error(err);
            console.log('File Created! Checkout "project name"README.md in this directory to see it!');
        })
    })
}

        
promptProject()

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
