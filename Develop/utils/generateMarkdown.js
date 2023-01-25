// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![${license}](https://img.shields.io/badge/license-${license}-blue)](${renderLicenseLink(license)})`
  }

  return ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://spdx.org/licenses/MIT.html";

  } else if (license === "GPLv2") {
    return "https://spdx.org/licenses/GPL-2.0-or-later.html";

  } else if (license === "GPLv3") {
    return "https://spdx.org/licenses/GPL-3.0-or-later.html";

  } else if (license === "Apache") {
    return "https://spdx.org/licenses/Apache-2.0.html";

  } else if (license === "ISC") {
    return "https://spdx.org/licenses/ISC.html";
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None") {
  return `## License \n This project is covered under the ${license} license.\n`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function renderCredits(data) {
  if(data.includeCredits) {
    return "## Credits \n" + " " + data.credits + "\n"
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.includeCredits ? "- [Credits](#credits)" : ""}
  ${data.license !== "None" ? "- [License](#license)" : ""}
  - [How to Contribute](#how-to-contribute)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${data.includeCredits ? renderCredits(data) : ""}
  ${renderLicenseSection(data.license)}
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
