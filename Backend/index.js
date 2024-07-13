const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8005;
const MONGODB_URI = process.env.MONGODB_URL;


// Middleware
const corsOptions = {
    origin: 'https://aute-care-pro-car-service.netlify.app',
    credentials: true,  // enable set cookie
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the Vite app
app.use(express.static(path.join(__dirname, 'client', 'build')));
// Routes
app.use('/api/auth', require('./routes/auth'));

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


app.get("/",(req,res)=>{

    res.json("Hello")
})

// Serve index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
