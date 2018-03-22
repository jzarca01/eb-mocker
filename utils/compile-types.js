const path = require('path');
const fs = require('fs');

const { compileFromFile } = require('json-schema-to-typescript');

async function compileTypes(inputFile, destDir, options = {
    bannerComment: "// Generated with eb-mocker",
}) {
    return fs.writeFileSync(`${destDir}/data.d.ts`, await compileFromFile(inputFile, options));
  }

module.exports = compileTypes