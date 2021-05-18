// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Include markdown generator module
const markdownGen = require("./utils/generateMarkdown");

// Question Class Definition
class Question {
  constructor(prompt, followUpQuestions) {
    this.prompt = prompt;
    this.followUpQuestions = followUpQuestions;
  }
}

// Create an array of questions for user input
const questions = [
  new Question({ type: "input", message: "Project Title:", name: "title" }),
  new Question(
    {
      type: "confirm",
      message: "Would you like to include a screenshot? (Recommended)",
      name: "screenshotPrompt",
    },
    [
      new Question({
        type: "input",
        message: "Enter the screenshot URL:",
        name: "screenshotUrl",
      }),
    ]
  ),
  new Question(
    {
      type: "confirm",
      message: "Would you like to include a live demo link? (Recommended)",
      name: "demoLinkPrompt",
    },
    [
      new Question({
        type: "input",
        message: "Enter the live demo URL:",
        name: "liveDemoUrl",
      }),
    ]
  ),
  new Question({
    type: "input",
    message: "Enter the project Overview:",
    name: "overview",
  }),
  new Question({
    type: "input",
    message: "Enter the project's Installation Instructions:",
    name: "installation",
  }),
  new Question({
    type: "input",
    message: "Usage Information:",
    name: "usage",
  }),
  new Question({
    type: "input",
    message: "Enter the project's Contribution Guidelines:",
    name: "contribution",
  }),
  new Question({
    type: "input",
    message: "Enter the project's Test Instructions:",
    name: "tests",
  }),
  new Question({
    type: "list",
    message: "Choose a license for your project:",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      'BSD 3-Clause "New" or "Revised" License',
    ],
  }),
  new Question({
    type: "input",
    message: "Enter your GitHub Username:",
    name: "githubUsername",
  }),
  new Question({
    type: "input",
    message: "Enter your email address:",
    name: "email",
  }),
];

// Create an empty object to store user responses in
let responses = {};

// Create a function to write README file
function writeToFile(fileName, data) {
  console.log("Generating README...");
  fs.writeFile(`./output/${fileName}.md`, `${data}\n`, (err) =>
    err ? console.log(err) : console.log("README generated Successfully!")
  );
}

// Process the question object received as the parameter and handle any follow-up / nested questions that may also exist
async function renderQuestion(question) {
  // Prompt User
  await inquirer.prompt(question.prompt).then(async (res) => {
    // Push response to data object
    responses[Object.keys(res)] = res[Object.keys(res)];

    // If the question has followup questions AND the response to the parent prompt evaluates to 'TRUE', repeat the process for each follow-up question by calling the renderQuestion() function again from inside this loop

    if (question.followUpQuestions && res[Object.keys(res)]) {
      for (const followUpQuestion of question.followUpQuestions) {
        await renderQuestion(followUpQuestion);
      }
    }
  });
}

// Create a function to initialize the app
async function init() {
  // Iterate through the array of predefined questions
  for (const question of questions) {
    // Pass each question object to the renderQuestion function
    await renderQuestion(question);
  }

  // // Generate markdown and write to file
  writeToFile("README", markdownGen.generateMarkdown(responses));
}

// Function call to initialize app
init();
