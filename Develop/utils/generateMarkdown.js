// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function renderCredits(data) {
  if(data.includeCredits) {
    return `
      ## Credits
      ${data.credits}

    `
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.includeCredits ? "- [Credits](#credits)" : ""}
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${data.includeCredits ? renderCredits(data) : ""}
  ## License
  ${data.license}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have questions please email me.\n
  Email: ${data.email}\n
  GitHub: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
