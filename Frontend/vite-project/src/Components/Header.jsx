// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowServicesDropdown(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
      <Link className="navbar-brand fs-4 fw-bold" to="/" style={{ color: '#3498db' }}>Auto Care Pro</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-4 py-2 fs-5 text-dark fw-bold" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-4 py-2 fs-5 text-dark fw-bold"
                to="/services"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Services
              </Link>
              {showServicesDropdown && (
                <ul className="dropdown-menu show" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <li><Link className="dropdown-item" to="/services/washing-packages">Washing Packages</Link></li>
                  <li><Link className="dropdown-item" to="/services/lubrication">Lubrication Services</Link></li>
                  <li><Link className="dropdown-item" to="/services/treatment">Treatment Services</Link></li>
                  {/* Add more service options as needed */}
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4 py-2 fs-5 text-dark fw-bold" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4 py-2 fs-5 text-dark fw-bold" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4 py-2 fs-5 text-dark fw-bold" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4 py-2 fs-5 text-dark fw-bold" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4 py-2 fs-5 text-dark fw-bold" to="/login">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4 py-2 fs-5 text-dark fw-bold" to="/shop">Shop</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
