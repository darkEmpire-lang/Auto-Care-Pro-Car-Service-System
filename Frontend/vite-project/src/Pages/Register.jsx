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
            const response = await axios.post(`${process.env.MONGODB_URL}/api/auth/register`, newUser);
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
        <div className="container mt-4" style={{ width: "1000px", padding: "20px", borderRadius: "5px", marginTop: "70px" }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Register</h2>
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text"class Name="form-control"  id="name" name="name"    value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        autocomplete="name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        autocomplete="email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        autocomplete="new-password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
