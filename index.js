const express = require('express'); // Load express framework
const app = express();              // Initialize express app

const DEFAULT_PORT = 3000; 

app.use(express.static('client')) // relative path of client-side code

// Define behavior for the server when it receives a request with this URL
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/client/index.html");
});

// Start server by listening to designated port and responding to all requests
const server = app.listen(process.env.PORT || DEFAULT_PORT, function () {
  // Log a message to indicate that the server was started correctly
  const port = server.address().port;
  console.log(`Server listening on port ${port}!`);
});