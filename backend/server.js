// Import HTTP module
const http = require('http');

// Create backend server
const server = http.createServer((req, res) => {

    res.end('Welcome to Employee Management System Backend!');

});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running on port 3000');
});