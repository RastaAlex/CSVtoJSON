'use strict';

function csvJSON(csv) {
    if (csv === '')
        return [];
    
    if (!csv)
        throw Error('csv should be string!');
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (const item in lines) {
        if (!lines[item])
            continue;
        const obj = {};
        const currentline = lines[item].split(',');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}

module.exports = csvJSON;
