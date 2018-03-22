const { createJson, mkdirSync } = require('./data-creator');
const compileTypes = require('./compile-types');

module.exports = {
    createJson : createJson,
    compileTypes : compileTypes,
    mkdirSync: mkdirSync
}