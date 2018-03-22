const path = require('path')
const appRoot = require('app-root-path');
const { createJson, compileTypes, mkdirSync, copySchema } = require('./utils')

const metadata = require('./resources/metadata.json');

async function init (){
    try {
        const destDir = await mkdirSync(appRoot, 'eb-mocker');
        await copySchema(metadata, destDir);
        await createJson(metadata, destDir);
        await compileTypes(path.resolve(__dirname, './resources/metadata.json'), destDir)
    }
    catch(err) {
        throw new Error(err);
    }
}

init();