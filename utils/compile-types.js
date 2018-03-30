const path = require('path');
const fs = require('fs');

const { compile } = require('json-schema-to-typescript');

async function compileTypes(schema, destDir, options = {
    bannerComment: "// Generated with eb-mocker",
}) {
    return fs.writeFileSync(`${destDir}/${schema.title}.d.ts`, await compile(schema, schema.title, options));
  }

module.exports = compileTypes