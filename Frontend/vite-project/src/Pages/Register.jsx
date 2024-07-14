import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password
        };

        try {
            const response = await axios.post('${process.env.MONGODB_URL}/api/auth/register', newUser);
            toast.success('Registered successfully');
            setUser({ name: '', email: '', password: '' });
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        } catch (error) {
            if (!error.response) {
                toast.error('Network error. Please try again.');
            } else {
                toast.error('Registration failed. Please try again.');
            }
            console.error('Registration error:', error.message);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Register</h2>
                            <form onSubmit={handleRegister} style={styles.form}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="name"
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type='email'
                                        className="form-control"
                                        id="email"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type='password'
                                        className="form-control"
                                        id="password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        required
                                        style={styles.input}
                                    />
                                </div>
                                <button type='submit' className="btn btn-primary btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Internal CSS styles with media queries
const styles = {
    form: {
        maxWidth: '400px',
        margin: '0 auto'
    },
    input: {
        fontSize: '16px',
        padding: '10px'
    },
    // Media queries for responsiveness
    '@media (max-width: 768px)': {
        form: {
            maxWidth: '100%'
        },
        input: {
            fontSize: '14px',
            padding: '8px'
        }
    }
};

export default Register;
