const inquirer = require("inquirer");






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
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers){
        const markdown = `
        ## QUESTIONS
        ${answers.questions}
        
        ## LICENSE
        `
    })
}

// function call to initialize program
init();

