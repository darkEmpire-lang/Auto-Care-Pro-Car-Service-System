// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Adjust path as per your project structure
import Home from './Pages/Home'; // Adjust path as per your project structure
import Register from './Pages/Register';
import Login from './Pages/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
