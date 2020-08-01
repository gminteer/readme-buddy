const inquirer = require('inquirer');
const fs = require('fs');
// separating the question list and readme template into their own files makes this a lot more readable.
const questions = require('./questions');
const readmeTemplate = require('./readme-template');

const askQuestions = async () => await inquirer.prompt(questions);

async function generateReadme(answers) {
  const fileHandle = await fs.promises.open('README.md', 'w');
  await fs.promises.writeFile(fileHandle, readmeTemplate(answers));
  await fileHandle.close();
}

module.exports = {askQuestions, generateReadme};
