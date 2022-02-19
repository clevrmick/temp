// we have the option of interracting with the file system and the name of the 
// module is called fs
// we can actually do it in two ways, /Asynchronous and syncronous

// ASYNCHRONOUS WAYS: the way asychronous works is that we need to provide a call back
// and this means that the callback is run when we are done
const {readFile, writeFile} = require('fs');

console.log('testing the code in async action')
readFile('./content/first.txt', 'utf8', ((err, result) => {
    if (err) {
        console.log(err);
    }

    const first = result;
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
        }
        
        const second = result;
        writeFile('./content/dataTransmit.txt', 'Data received maximumly', ((err, result) => {
            if (err) {
                console.log(err)
            }

            // console.log(result)
            console.log('hello testing async in action')
        }))
    })
}))

console.log('yeah this is callback hell')


