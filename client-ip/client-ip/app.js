const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Route to fetch the client's IP address
app.get('/api/local-ip', (req, res) => {
    // Retrieve the client's IP address from the x-forwarded-for header
    const ipAddresses = req.headers['x-forwarded-for'];
    // Use the first IP address in the list or fallback to the socket's remote address
    const clientIp = ipAddresses ? ipAddresses.split(',')[0] : req.socket.remoteAddress;

    // Return the client's IP address as a JSON response
    res.json({ ip: clientIp });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
