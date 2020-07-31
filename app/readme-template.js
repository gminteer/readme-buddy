module.exports = (answers) => `# ${answers.name}

![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license.replace(/-/g, '%20')}-green.svg)

###

## Description

---

${answers.description}

## Table of Contents

---

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

---

${answers.installation}

## Usage

---

${answers.usage}

## License

---

Copyright ${new Date().getFullYear()} ${answers.email}

Licensed under the ${answers.license} License (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://opensource.org/licenses/${answers.license}>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Contributing

---

${answers.contribution}

## Tests

---

${answers.tests}

## Questions

---

Any additional questions? Comments? Contact me on [GitHub](https://github.com/${
  answers.githubProfile
}) or email me at [${answers.email}](mailto:${answers.email}).

![Powered by <3 emojis](https://img.shields.io/badge/made%20with-%F0%9F%92%96-lightgrey.svg)

`;
