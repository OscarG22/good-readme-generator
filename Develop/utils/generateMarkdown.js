// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)

  //#endregion

  #
`;
}

module.exports = generateMarkdown;
