# My Awesome Web Application [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

<p align="center">
  <img src="./assets/img/demo.gif" alt="My Awesome Web Application demo screenshot">
</p>
<p align="center">

  <p align="center">
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">Watch Demo Video</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#approach">Approach</a></li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br>

## Overview

This Node.js based CLI application streamlines the process of creating READMEs for code repositories by automatically generating the appropriate markdown based on user input about their project. The purpose behind the development of this project is to demonstrate a general understanding of the Node.js runtime environment and the ability to make use of its `fs` module as well third-party NPM packages when developing Node applications.

In addition to generating the various written sections of a README, this application also allows the user to include a project screenshot, live demo link and select an appropriate license for their project. The latter of which is also displayed visually as a badge in the README.

### Technologies Used

The application uses the following packages:

- [Node.js](https://nodejs.org/en/)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#readme)

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

```

## Getting Started

To get a local copy of this project up and running follow these simple steps.

### Prerequisites

First you must install [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/get-npm) if you haven't done so already. Once this is done, follow the installation instructions below to run the application locally.

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/kevin-aminzadeh/readme-generator
   ```
2. Navigate to the repository directory and run the following command to install the necessary NPM packages.
   ```sh
   npm install
   ```
3. Run the app start script.
   ```sh
   npm start
   ```

## Approach

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend fringilla lectus non dignissim. Aliquam gravida gravida accumsan. In aliquet id nibh sed condimentum. Aenean ultricies sem eget pretium bibendum. Mauris sit amet consectetur massa. Nulla cursus vulputate massa, id suscipit orci varius vel. Sed semper at arcu ac facilisis. Nunc enim diam, rutrum quis dolor non, gravida convallis diam. Duis rutrum ex id ante scelerisque, vitae tincidunt risus placerat. Duis placerat sem ut ante consequat bibendum. Morbi luctus nibh id risus lobortis, at ultricies nunc pulvinar. Fusce sed iaculis odio.

## Future Improvements

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend fringilla lectus non dignissim. Aliquam gravida gravida accumsan. In aliquet id nibh sed condimentum. Aenean ultricies sem eget pretium bibendum. Mauris sit amet consectetur massa. Nulla cursus vulputate massa, id suscipit orci varius vel. Sed semper at arcu ac facilisis. Nunc enim diam, rutrum quis dolor non, gravida convallis diam. Duis rutrum ex id ante scelerisque, vitae tincidunt risus placerat. Duis placerat sem ut ante consequat bibendum. Morbi luctus nibh id risus lobortis, at ultricies nunc pulvinar. Fusce sed iaculis odio.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).