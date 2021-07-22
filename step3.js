const fs = require('fs');
const axios = require('axios');


function writeToFile(text, output) {
    if(output) {
      fs.writeFile(output, text, 'utf8', function(err) {
        if(err) {
            console.error(`error`);
            process.exit(1);
        }
      });
    }else{
      console.log(text);
    }
  }

function _readFile(err,data){
    if(err){
        console.error('error ',err);
        process.exit(1);
    } else {
        console.log(data);
        writeToFile(data,output_file);
    }
}

function cat(path) {
  fs.readFile(path, 'utf8', _readFile);
}

async function webCat(url) {
    try{
        let response = await axios.get(url);
        // console.log(response.data);
        writeToFile(response.data,output_file);
    } catch (err){
        console.error('url not found');
        process.exit(1);
    }
}

let path = process.argv[2];
let output_file;

if(process.argv[2] === '--out') {
    output_file = process.argv[3];
    path = process.argv[4];
}else{
    path = process.argv[2];
}

if(path.slice(0, 4) === 'http') {
    webCat(path, output_file);
}else{
    cat(path, output_file);
}
