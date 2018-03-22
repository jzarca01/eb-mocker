const fs = require('fs');
const path = require('path');

const jsf = require('json-schema-faker');
jsf.extend('faker', () =>
  require('faker'),
);

async function mkdirSync(rootDir, dirName) {
  try {
    fs.statSync(`${rootDir}/${dirName}`);
  } 
  catch(e) {
    fs.mkdirSync(`${rootDir}/${dirName}`);
  }
  return `${rootDir}/${dirName}`;
}

async function copySchema(schema, destDir) {
  try {
    return fs.writeFileSync(`${destDir}/schema.json`, JSON.stringify(schema, null, 2));
  }
  catch(err) {
    throw new Error(err);
  }
}

async function resolveSchema(schema) {
    const mockItems = await jsf.resolve(schema);
    return mockItems;
  }

async function createJson(schema, destDir) {
  try {
    const items = await resolveSchema(schema);
    return fs.writeFileSync(`${destDir}/data.json`, JSON.stringify(items, null, 2));
  }
  catch(err) {
    throw new Error(err);
  }
}

module.exports = {
  createJson: createJson,
  mkdirSync: mkdirSync,
  copySchema: copySchema
}