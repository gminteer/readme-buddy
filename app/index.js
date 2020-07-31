const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const readmeTemplate = require('./readme-template');

async function askQuestions() {
  const answers = await inquirer.prompt(questions);
  return answers;
}

async function generateReadme(answers) {
  const fileHandle = await fs.promises.open('README.md', 'w');
  await fs.promises.writeFile(fileHandle, readmeTemplate(answers));
  await fileHandle.close();
}

module.exports = {askQuestions, generateReadme};
