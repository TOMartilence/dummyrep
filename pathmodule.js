const { mkdir } = require("fs");
const path=require("path");

console.log(path.dirname);

const txtpath=path.join("mainfilepathjs","subfile","index.txt")

console.log(`access the text file in ${txtpath}`);

