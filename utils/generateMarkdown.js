// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
   if (data == "MIT") {
    return  "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (data == "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (data == "GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (data == "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else {
    return "";}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if (data == "MIT") {
    return "[here](https://opensource.org/licenses/MIT)";
  }
  else if (data == "APACHE 2.0") {
    return "[here](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (data == "GPL v3") {
    return "[here](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (data == "BSD 3") {
    return "[here](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else {
    return "";
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data == "MIT") {
    return "MIT License";
  }
  else if (data == "APACHE 2.0") {
    return "Apache 2.0 License";
  }
  else if (data == "GPL v3") {
    return "GPL License";
  }
  else if (data == "BSD 3") {
    return "BSD 3-Clause License";
  }
  else {
    return "";
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${renderLicenseBadge(data.license)}
  
  # ${data.projectName}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Credits](#credits)
  - [License](#License)
  
  ## Installation
  ${data.installationSteps}
  
  ## Usage
  ${data.usage}
  
  ## Tests
  ${data.tests}
  
  ## Credits
  ${data.credits}
  
  ## License
  This project utilizes the ${renderLicenseSection(data.license)}. For more information, please enquire at  ${renderLicenseLink(data.license)}.
  
  ## Questions
  If you have any questions or inquiries about this project, please email me at ${data.email}, or contact me via my gitHub account at [https://github.com/${data.githubUsername}](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;
