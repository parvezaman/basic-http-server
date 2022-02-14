const http = require('http');

// create a server
http.createServer((req, res) => {
    // write responses
    res.write('Hello world. this is the first http server running...');
    res.end();
}).listen(5000, () => console.log('server is running!'));