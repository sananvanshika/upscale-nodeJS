// Import the http module
const http = require("http");

// server instance
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Default Route - Node Js Server Response Successful");
  } else if (req.url === "/aboutus") {
    res.end("This is About Us Page");
  } else if (req.url === "/contact") {
    res.end("This is Contact Page");
  } else if (req.url === "/home") {
    res.end("This is Home Page");
  } else {
    res.end("Error-404 Page Not Found");
  }
});

// specifying port no = 8000 and Ip address = 127.0.0.1 and start the server
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to http://localhost:8000");
});
