'use strict';

const test = require('tape');
const csvJSON = require('../lib/function');
const tryCatch = require('try-catch');

test('csvJSON: empty arguments', (t) => {
    const [error] = tryCatch(csvJSON);
    t.equal(error.message, 'csv should be string!');
    t.end();
});

test('csvJSON: empty string', (t) => {
    const actual = csvJSON('');
    const expect = [];
    t.deepEqual(actual, expect);
    t.end();
});

test('csvJSON: valid csv', (t) => {
    const actual = csvJSON('hello, world');
    const expect = [ {'hello': 'hello', ' world': ' world'} ];
    t.deepEqual(actual, expect);
    t.end();
});

