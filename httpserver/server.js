const http = require("http");

const routes = {
  "/": "Default Route - Node.js Server Response Successful",
  "/aboutus": "This is About Us Page",
  "/contact": "This is Contact Page",
  "/home": "This is Home Page",
};

const handleRequest = (req, res) => {
  const url = req.url;
  const content = routes[url] || "Error 404 - Page Not Found";

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(content);
};

const server = http.createServer(handleRequest);

const PORT = 8000;
const IPADDRESS = "127.0.0.1";

server.listen(PORT, IPADDRESS, () => {
  console.log(`Server running at http://${IPADDRESS}:${PORT}/`);
});
