// Import the http module
const http = require("http");

// server instance
const server = http.createServer((req,res)=>{
res.end("Node Js Server Response Successful");
});


// specifying port no = 8000 and Ip address = 127.0.0.1 and start the server
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to http://localhost:8000")
});
