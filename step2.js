const fs = require('fs');
const axios = require('axios');

function _readFile(err,data){
    if(err){
        console.error('error ',err);
        process.exit(1);
    } else {
        console.log(data);
    }
}

function cat(path) {
  fs.readFile(path, 'utf8', _readFile);
}

async function webCat(url) {
    try{
        let response = await axios.get(url);
        console.log(response.data);
    } catch (err){
        console.error('url not found');
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}
