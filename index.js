// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [{
        type: 'input',
        name: 'projectName',
        message: 'What will the name of your project be?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What will the name of your file be?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter text information for the program description.',
    },

    {
        type: 'input',
        name: 'installationSteps',
        message: 'Please enter text information for the program installation.',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please enter text information for the usage section.',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please enter text information for the tests section.',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Please enter text information for the credits section.',
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your gitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose which license you would like to use',
        choices: ['MIT', 'BSD 3', 'APACHE 2.0', 'GPL v3']
    },
];


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            response = generateMarkdown(data);
            writeToFile(`${data.name}.md`, response);
        });
}

// Function call to initialize app
init(); 