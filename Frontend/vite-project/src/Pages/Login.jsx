import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, credentials);
            toast.success('Logged in successfully');
            // Handle redirection or other actions after successful login

            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } catch (error) {
            if (error.response) {
                // Server responded with an error status code (4xx, 5xx)
                toast.error('Login failed. Please check your credentials.');
                console.error('Login error:', error.message);
            } else if (error.request) {
                // The request was made but no response was received
                toast.error('Network error. Please try again.');
                console.error('Network error:', error.message);
            } else {
                // Something happened in setting up the request that triggered an error
                toast.error('Unexpected error. Please try again later.');
                console.error('Unexpected error:', error.message);
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <form onSubmit={handleLogin} style={styles.form}>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type='email'
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={credentials.email}
                                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                        autocomplete="email"
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
                                        name="password"
                                        value={credentials.password}
                                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                        autocomplete="current-password"
                                        required
                                        style={styles.input}
                                    />
                                </div>
                                <button type='submit' className="btn btn-primary btn-block">Login</button>
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

export default Login;
