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
            const response = await axios.post('auto-care-pro-car-service-system.vercel.app/api/auth/login', credentials);
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
        <div className="container mt-5"  style={{ width:"1000px",padding: "20px",  borderRadius: "5px", marginTop: "70px" }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type='email'
                                        className="form-control"
                                        id="email"
                                        value={credentials.email}
                                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type='password'
                                        className="form-control"
                                        id="password"
                                        value={credentials.password}
                                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                        required
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

export default Login;
