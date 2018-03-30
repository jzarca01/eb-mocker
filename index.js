const path = require('path')
const appRoot = require('app-root-path');
const { createJson, compileTypes, mkdirSync, copySchema } = require('./utils')

const jsonSchemas = require('eb-mocker-resources');

async function init (schema){
    try {
        const destDir = await mkdirSync(appRoot, 'eb-mocker');
        await copySchema(schema, destDir);
        await createJson(schema, destDir);
        await compileTypes(schema, destDir)
    }
    catch(err) {
        throw new Error(err);
    }
}

Object.keys(jsonSchemas).map(jsonSchema => init(jsonSchemas[jsonSchema]));