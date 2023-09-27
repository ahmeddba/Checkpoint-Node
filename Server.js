// Importing core module

var http = require("http");
http.createServer((request, response) => {

response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('<h1>Hello Node!!!!</h1>\n');

}).listen(8081);
console.log(" node.js server running at http://127.0.0.1:8081/")

