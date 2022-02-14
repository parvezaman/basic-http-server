const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        res.end('<h1>Home</h1>')
    }
});

const port = process.env.PORT || 5000;

server.listen(port, console.log(`server running on port: ${port}`));