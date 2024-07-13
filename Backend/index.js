const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8005;
const MONGODB_URI = process.env.MONGODB_URL;

// Middleware for CORS
const allowedOrigins = [
    'https://aute-care-pro-car-service.netlify.app',
    
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.use(express.json());

// Serve static files from the Vite app
app.use(express.static(path.join(__dirname, 'vite-project/dist')));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Basic route to check if server is running
app.get("/", (req, res) => {
    res.json("Hello");
});

// Serve Vite frontend for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend/vite-project/dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
