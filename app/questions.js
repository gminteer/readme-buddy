module.exports = [
  {
    name: 'name',
    type: 'input',
    message: 'What is the name of this project?',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Briefly describe the project:',
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Describe how to install the project:',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Describe how to use the project:',
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'List guidelines for contributing to this project:',
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Describe how to test the project:',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Select a license for this project:',
    choices: [
      {
        name: 'Apache License 2.0',
        value: 'Apache-2.0',
      },
      {
        name: 'Eclipse Public License version 2.0',
        value: 'EPL-2.0',
      },
      {
        name: 'GNU General Public License version 2',
        value: 'GPL-2.0',
      },
      {
        name: 'GNU General Public License version 3',
        value: 'GPL-3.0',
      },
      {
        name: 'ISC License',
        value: 'ISC',
      },
      {
        name: 'MIT License',
        value: 'MIT',
      },
    ],
  },
  {
    name: 'githubProfile',
    type: 'input',
    message: 'What is your GitHub username?',
  },
  {
    name: 'email',
    type: 'input',
    message: 'What if your email address?',
  },
];
