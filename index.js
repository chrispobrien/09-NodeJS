// Packages needed, inquirer and fs are used within these js files so they are not necessary here
const promptUser = require('./utils/promptUser');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = require('./utils/writeToFile');

// Initialize app
function init() {
    // Prompt user to enter details about their project
    promptUser()
    // Generate Markdown content with answers
    .then(answers => {
        return generateMarkdown(answers);
    })
    // Write Markdown file as CANDIDATE.md
    .then(pageMD => {
        return writeToFile('./CANDIDATE.md',pageMD);
    })
    // If an error occurs with any of the preceding, log it
    .catch((err) => {
        console.log(err);
    });
}

// Function call to initialize app
init();
