#!/usr/bin/env node
const app = require('./app');

try {
  app.askQuestions().then((answers) => app.generateReadme(answers));
} catch (error) {
  console.error(error);
}
