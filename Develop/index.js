// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../src/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [

    //Project name
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    // Description of project
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },

    // Usage Information
    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },
    // Contribution Guidelines
    {
        type: 'input',
        name: 'Contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    // Test Instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
    },
    // License Options
    {
        type: 'checkbox',
        name: 'Licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'Email',
        message: ' Enter your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("attempt to write readme")
    fs.writeFile(fileName,data, (err) => {
    
        if(err)
            throw err;
            console.log('Success! Information tranferred to the README')
    });
    
};

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("./SampleREADME.md", generateMarkdown(JSON.stringify(userInput,null,2)))
    });
}

// Function call to initialize app
init();
