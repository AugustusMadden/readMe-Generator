// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions =
    inquirer
    .prompt([{
            type: 'checkbox',
            name: 'alpha',
            message: 'test1',
            choices: ['a', 'b', 'c', 'd']
        },
        {
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
            name: '~~~TextInput',
            message: 'Please enter text information for the ~~~.',
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
    ])
    .then((data) => {
        
        console.log(data);
        console.log(JSON.stringify(data));
    });


// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();