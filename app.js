// every file is a module in node by default
// modules ecapsulated code 

const names = require('./names');
// const sayHi = require('./func');
const data = require('./alternative');
require('./func')

console.log(data)

console.log(names);

const {john, userName} = names;

// sayHi(john);
// sayHi(userName);

// const amount = 80;

// if (amount === 80) {
//     console.log(`hey it worked`)
// } else {
//     console.log(`not same amount`)
// }

// USEFULL BUILT IN MODULES 

