// imports http module to create a simple HTTP server
const http = require('http');

// creates an HTTP server that responds with "Hello World"
const server = http.createServer((req, res)=>{
    res.end("Hello World");
})


// listens on port 3000 and logs a message to the console
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})