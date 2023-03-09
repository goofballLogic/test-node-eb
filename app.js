const http = require("http");
const hostname = "localhost";
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("<html><body><h1>Hello, World!</h1></body></html>");
})
server.listen(process.env.PORT || 5000, hostname);
