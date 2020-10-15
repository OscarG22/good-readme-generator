const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
},
{
    type: "input",
    message: "Enter a description of your project.",
    name: "description"
},
{
    type: "input",
    message: "Enter installation instructions for your project.",
    name: "installation"
},
{
    type: "input",
    message: "",
    name: "usage"
},
{
    type: "input",
    message: "Select your license of choice.",
    name: "license"
},
{
    type: "input",
    message: "Did anyone else contribute to this project?",
    name: "contribution"
},
{
    type: "input",
    message: "Please provide test-instructions.",
    name: "test-instructions"
},
{
    type: "input",
    message: "Enter your GitHub username.",
    name: "questions"
},
{
    type: "input",
    message: "Enter your email address.",
    name: "questions"
}];
    



// function to write README file
function writeToFile(fileName, newRead) {
    writeFileAsync('README.MD', newReadMe)
}
// function writeToFile(fileName, data) {
//     writeFileAsync('README.MD', newReadMe)
// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {
        let markdown = generateMarkdown(answers)
        console.log(markdown)
    })
}

// function call to initialize program
init();

