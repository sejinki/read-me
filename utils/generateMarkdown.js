// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Github License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## ReadMe Description
  ${data.description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  * [Description](#description)
  ## Lead Name:
  ${data.name}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contribution}
  ## Tests
  ${data.test}
  ## License
  ${data.license}
  ## Questions
  Github: [${data.username}](https://github.com/${data.username}/)
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
