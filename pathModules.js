// PATH MODULES 

// in node we can interract with the file system: the path modules
// allows us to interract with the file path 

const path = require('path');
// path.sep // this will return my platform specific saperator

const filePath = path.join('./content/', 'subfolder', 'secreatFile.txt');
console.log(filePath);

// to get the base or the last content in the trailing slash
const base = path.basename(filePath);
console.log(base);

// path.resolve returns an abosolute path
const abosolute = path.resolve(__dirname, 'content/', 'subfolder', 'secreatFile.txt');
console.log(abosolute)
