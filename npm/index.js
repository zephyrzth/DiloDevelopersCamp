const http = require('http');
const port = 8080;

http.createServer(function (req, res) {
    res.end('Hello Server');
}).listen(port);

console.log(`Running on http://localhost:${port}`);
