const fs = require('fs');
const path = process.argv[2]; 
const file = fs.readFileSync(path,{encoding: 'utf-8'});


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

const newFile = csvJSON();

try {
    fs.writeFileSync('newFile.JSON', newFile, 'utf8');
    console.log('Done');
  } catch (e) {
    console.log(e)
  };


