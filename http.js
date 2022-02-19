const http = require('http');

// lets create a web server. 
// what do webserver do? they keep listening to a request

const server = http.createServer((req, res) => { // the first parameter is for the incoming request and the response is what we are sending back
    
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Welcome to our About section')
    } else {
        res.end(`
        <h1>OOps</h1>
        <p>page not found. something wrong happend</p>
        `)
    }
    /*
    console.log(req) // footnote down
    res.write('Welcome to our home page');
    res.end() //end our response

    * */
    // the regquest Object is going to be a gaient object. notice how the console.log(reg) did not output 
    // object because the
    // server is waiting for the incoming request so we need to go to the browser and refresh. now what we
    // are looking for is the url property  because that url property is going to tell us what address the 
    // client is requesting
})
// what port our server will be listening to 
server.listen(5000)