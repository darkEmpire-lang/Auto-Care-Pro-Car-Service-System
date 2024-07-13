const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Allow requests from specific origins
const corsOptions = {
    origin: 'https://aute-care-pro-car-service.netlify.app',
    credentials: true,  // enable set cookie
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the Vite app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Example route
app.post('/api/auth/login', (req, res) => {
    // Handle login logic
    // Example response
    res.status(200).json({ message: 'Login successful' });
});

// Serve index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 8005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
