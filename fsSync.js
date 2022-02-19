// we have the option of interracting with the file system and the name of the 
// module is called fs
// we can actually do it in two ways, /Asynchronous and syncronous

// SYNCHRONOUS WAY
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// writeFileSync is used to write file if the file is not there
// and if it is there it will overWrite 
writeFileSync('./content/third.txt', 'this is the result encryption') // this write a file in the system

const third = readFileSync('./content/third.txt', 'utf8') // this read the file in the system
console.log(first, third);

