// TODO: Include packages needed for this application
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
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your Project Name? (Required)',
            validate: projectNameInput => {
                if(projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        }
    ]).then(projectData => {
        //portfolioData.push(projectData);
        const pageMD = generateREADME(projectData);
        fs.writeFile('./readMe.md', pageMD, err => {
            if(err) throw new Error(err);
            console.log('Page Created! Checkout readme.md in this directory to see it!');
        })
    })
}

            

promptProject()
//console.log(portfolioData)
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
