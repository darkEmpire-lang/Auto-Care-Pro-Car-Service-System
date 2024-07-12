const User = require('../models/user');

const test = (req, res) => {
    res.json('test is working');
};

const registeruser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if name was entered
        if (!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        }

        // Check if password is good
        if (!password || password.length < 7) {
            return res.status(400).json({
                error: 'Password is required and should be at least 7 characters'
            });
        }

        // Check if email is already taken
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                error: 'Email is already taken'
            });
        }

        // Create a new user (assuming User model has been defined properly)
        const newUser = new User({
            name,
            email,
            password // In a real application, password should be hashed before storing
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success message or user details
        res.json({
            message: 'User registered successfully',
            user: newUser
        });

    } catch (error) {
        console.error('Error in registeruser:', error);
        res.status(500).json({
            error: 'Server error, please try again'
        });
    }
};

module.exports = {
    test,
    registeruser
};
