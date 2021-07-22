const fs = require('fs');

function _readFile(err,data){
    if(err){
        console.error('error ',err);
        process.exit(1);
    } else {
        console.log(data);
    }
}

function cat(path){
    fs.readFile(path,'utf8',_readFile);
}

cat(process.argv[2]);