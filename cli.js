#!/usr/bin/env node
const app = require('./app');

app.askQuestions().then((answers) => app.generateReadme(answers));
