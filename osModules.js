// OS MODULES: give us info about our operating system

// method returns about the system up time inseconds 

const os = require('os');
// info about current user info 
const user = os.userInfo();
console.log(user)


console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)

