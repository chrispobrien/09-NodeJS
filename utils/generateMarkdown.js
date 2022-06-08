// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.badge}

## Description

  ${data.description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license} ${data.badge}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

https://github.com/${data.userName}

${data.email}
`;
}

module.exports = generateMarkdown;
