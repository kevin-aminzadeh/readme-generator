// Return README screenshot section
// If there is no screenshot URL, return an empty string
function renderScreenshot(screenshotUrl, projectTitle) {
  if (screenshotUrl) {
    return `
<p align="center">
  <img src="${screenshotUrl}" alt="${projectTitle} demo screenshot">
</p>
    `;
  } else {
    return "";
  }
}

// Return README live demo link
// If there is no demo link URL, return an empty string
function renderLiveDemoLink(liveDemoUrl) {
  if (liveDemoUrl) {
    return `
> <h2 align="center"><a  href="${liveDemoUrl}">Live Demo</a></h2>
    `;
  } else {
    return "";
  }
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(
        license
      )})`;
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseLink(
        license
      )})`;
    case "GNU General Public License v3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(
        license
      )})`;
    case `BSD 3-Clause "New" or "Revised" License`:
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](${renderLicenseLink(
        license
      )})`;
    default:
      return "";
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// TODO: Return license TOC entry
// If there is no license, return an empty string
function renderLicenseToc(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Return questions TOC entry
// If neither GitHub username nor Email address have been provided, return an empty string
function renderQuestionsToc(username, email) {}

// TODO: Return questions section
// If neither GitHub username nor Email address have been provided, return an empty string
function renderQuestionsSection(username, email) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {}

module.exports = generateMarkdown;
