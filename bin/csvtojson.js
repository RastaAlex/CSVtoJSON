const fs = require('fs');
const path = process.argv[2]; 
const file = fs.readFileSync(path,{encoding: 'utf-8'});
const tryCatch = require('try-catch');

    function csvJSON() {
    const lines = file.split('\n')
    const result = []
    const headers = lines[0].split(',')
    for (let item in lines) {
     if (!lines[item])
        continue
       const obj = {};
       const currentline = lines[item].split(',');
       for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
                }
    result.push(obj) 
   }
   return result;
}

const newFile = JSON.stringify(csvJSON(), null, '\t');
const write = fs.writeFileSync('newJSONfile.json', newFile);
const [error, result] = tryCatch(write);

if(error) {
    console.error(error.message);
}



