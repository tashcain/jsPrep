const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body "Hello World"
  res.end('Hello World\n');
});

// Start the server and listen on port 3000
server.listen(3001, () => {
  console.log('Server running at http://localhost:3000/');
});