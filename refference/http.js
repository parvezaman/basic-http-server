const http = require('http');

// create a server
http.createServer((req, res) => {
    // write responses
    res.write('Hello world');
    res.end();
}).listen(5000, () => console.log('server is running!'));