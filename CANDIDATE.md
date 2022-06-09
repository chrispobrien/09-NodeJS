# 09-NodeJS [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

  This project is week 9 homework challenge for Columbia Engineering Coding Bootcamp (Trilogy). The objective is to make a NodeJS application that prompts the user for common topics in a good README.md file, and then formats the answers in markdown format, into a new file.

Usage video link: https://drive.google.com/file/d/1U06UxS_OQq-ED7istiIRnVGSYp6IWjPy/view?usp=sharing

User story:

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

Acceptance criteria:

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

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

First, clone the repository, then change into the project folder, and install dependencies.

```
git clone https://github.com/chrispobrien/09-NodeJS.git
cd 09-NodeJS
npm install
```

## Usage

In the project folder 09-NodeJS, simply issue the command

```
node index
```

Answer the prompts appropriately. A file named CANDIDATE.md will be written to the current folder with the output, which can be moved and renamed README.md for your own project.

## License

MIT license [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing

As this is a homework assignment, no contributions are solicited.

## Tests

When answered appropriately, the prompts should create a valid README.md file suitable for use in production.

## Questions

https://github.com/chrispobrien

chris.obrien57@gmail.com
