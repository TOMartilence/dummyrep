// const number=12;

// if(number<13){

//     console.log("it is a small number");


// }

// else{
//     console.log("it is a large number");
// }

// console.log('its my first node js code');


// console.log(__dirname);

// function print(){
//     console.log("hello world");
// }

// setInterval(print,1000);




const name=require("./names");
const {wish}=require("./wishfunction");
const student=require("./names");



wish(name.john);
wish(name.peter);

console.log(student);