const { log } = require("console");
const os=require("os")

// var info=os.userInfo();
// console.log(info);

// console.log(`the system uptime is ${os.uptime} seconds`);

const currentOsInfo={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOsInfo);