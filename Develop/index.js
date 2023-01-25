// TODO: Include packages needed for this application
const inquire = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = [ "MIT", "GPLv2", "GPLv3", "Apache", "ISC", "None" ]
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title", 
    message: "What's the title of your README?",
    validate: (userInput) => {
      return handleValidation(userInput, "Please enter a project title.")
    }
  },

  {
    name: "description",
    message: "Please enter a description explaining the what, why, and how of your project.",
    validate: (userInput) => {
      return handleValidation(userInput, "It's a bio")
    }
  },

  {
    name: "installation",
    message: "Provide a step-by-step description of how to get the project started.",
    validate: (userInput) => {
      return handleValidation(userInput, "Please enter how to get the project started.")
    }
  },

  {
    name: "usage",
    message: "Provide instructions and examples for use.",
    validate: (userInput) => {
      return handleValidation(userInput, "Please enter instructions.")
    }
  },

  {
    type: "confirm",
    name: "includeCredits",
    message: "Were there other collaborators on this project?"
  },

  {
    name: "credits",
    message: "Please list any collaborators with links to the GitHub.",
    validate: (userInput) => {
      return handleValidation(userInput, "Uh Oh! someone likes all the credits.")
    },
    when: (answers) => {
      return answers.includeCredits
    }
  },

  {
    type: "list",
    name: "license",
    message: "Please choose a license.",
    choices: licenses
  },

  {
    name: "contribution",
    message: "Please enter guidelines for how others can contribute.",
    validate: (userInput) => {
      return handleValidation(userInput, "Sometimes you gotta tell people what to do.")
    }
  },

  {
    name: "tests",
    message: "Write a test for your project.",
    validate: (userInput) => {
      return handleValidation(userInput, "Don't worry this isn't being graded.")
    }
  },

  {
    name: "username",
    message: "What's ypur GitHub username?",
    validate: (userInput) => {
      return handleValidation(userInput, "it's a name you go by on the internet.")
    }
  },

  {
    name: "email",
    message: "What's your email?",
    validate: (userInput) => {
      return handleValidation(userInput, "Electronic Mail.")
    }
  }
];

function handleValidation(userInput, errorMessage) {
    if(!userInput.trim().length) { //userInput.length = 0 
      return errorMessage
    } 
    return true
  }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
  inquire.prompt(questions)
    .then((answers) => {
      const readMe = generateMarkdown(answers)
      writeToFile("README.md", readMe)
    })
}

// Function call to initialize app
init();
