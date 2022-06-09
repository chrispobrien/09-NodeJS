// Include inquirer node package
const inquirer = require('inquirer');

// For testing purposes
const mockData = {
    title: '09-NodeJS',
    description: 'This is a command line application that quickly and easily generates a README.md file. It prompts the user for the contents and formats it appropriately.',
    installation: 'Use\r\ngit clone https://github.com/chrispobrien/09-NodeJS.git to make a local copy.',
    usage: 'cd into the 09-NodeJS folder and run with the command\r\n ```node index```\r\n',
    contribution: 'Sample contribution guidelines',
    test: 'See usage.',
    license: 'MIT license',
    userName: 'chrispobrien',
    email: 'chris.obrien57@gmail.com'
};

// An array of inquirer style questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Please describe your project: (Required)',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Your project needs a description!');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'Please enter installation instructions: (Required)',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Your project needs installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'How does one use your project? (Required)',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Your project needs usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'contribution',
        message: 'How does one contribute to your project? (Required)',
        validate: contribution => {
            if (contribution) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'tests',
        message: 'Enter test instructions: (Required)',
        validate: tests => {
            if (tests) {
                return true;
            } else {
                console.log('Please enter test instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project: (Required)',
        choices: [  'Apache License 2.0',
                    'BSD 3-Clase "New" or "Revised" license',
                    'BSD 2-Clause "Simplified" or "FreeBSD license',
                    'GNU General Public License (GPL) v2',
                    'GNU General Public License (GPL) v3',
                    'GNU Library or "Lesser" Genral Public License (LGPL) v3',
                    'MIT license',
                    'Mozilla Public License 2.0',
                    'ISC License',
                    'Eclipse Public License version 1.0'],
        default: 'MIT license',
        validate: license => {
            if (license) {
                return true;
            } else {
                console.log('Your project needs a license!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your github user name: (Required)',
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log('Your project needs a Github user name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address: (Required)',
        validate: email => {
            if (email && email.includes('@')) {
                return true;
            } else {
                console.log('Your admirers need a way to contact you!')
                return false;
            }
        }
    }
];

// Badges to correspond with the license list
const badges = [
    {
        name: 'Apache License 2.0',
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        name: 'BSD 3-Clase "New" or "Revised" license',
        badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    },
    {
        name: 'BSD 2-Clause "Simplified" or "FreeBSD license',
        badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    },
    {
        name: 'GNU General Public License (GPL) v2',
        badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    },
    {
        name: 'GNU General Public License (GPL) v3',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        name: 'GNU Library or "Lesser" Genral Public License (LGPL) v3',
        badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    },
    {
        name: 'MIT license',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        name: 'Mozilla Public License 2.0',
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    },
    {
        name: 'ISC License',
        badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    },
    {
        name: 'Eclipse Public License version 1.0',
        badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    }
];

// Prompt user questions to fill answers object
const promptUser = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt(questions)
        .then((answers) => {
            // Load badge if a license is selected, and is in the badges array
            if (badges.find(i => i.name === answers.license)) {
                answers.badge = badges.find(i => i.name === answers.license).badge;
            } else {
                // We don't need no stinkin' badges!
                answers.badge = '';
            };
            resolve(answers);
            return;
        })
        .catch((err) => {
            reject(err);
            return;
        });
    });
};

module.exports = promptUser;