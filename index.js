const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
            if (error) throw error;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
    }
    if (req.url === '/about') {

        fs.readFile(path.join(__dirname, 'public', 'about.html'), (error, content) => {
            if (error) throw error;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
    }
    if (req.url === '/api/users') {
        const users = [
            { name: 'aman ullah', age: 30 },
            { name: 'aman parvez', age: 35 },
            { name: 'amanullah', age: 39 }
        ];
        res.writeHead(200, { "Content-Type": "Application/JSON" });
        res.end(JSON.stringify(users));
    }
});

const port = process.env.PORT || 5000;

server.listen(port, console.log(`server running on port: ${port}`));