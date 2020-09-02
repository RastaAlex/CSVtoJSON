'use strict';

const {
    readFileSync,
    writeFileSync,
} = require('fs');

const csvJSON = require('../lib/function.js');

const path = process.argv[2];
const file = readFileSync(path, 'utf-8');
const tryCatch = require('try-catch');

const newFile = JSON.stringify(csvJSON(file), null, 4);
const [error] = tryCatch(writeFileSync, 'newJSONfile.json', newFile);

if (error) {
    console.error(error.message);
}
