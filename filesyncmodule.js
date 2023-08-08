const fs=require("fs");

const text=fs.readFileSync("fstest.txt","utf8");

fs.writeFileSync("fstest.txt","testing if the message has reached the other side");

console.log(text);