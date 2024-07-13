import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'; // Import CSS file for additional styling

const Home = () => {
  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="hero-content">
          <h1>Welcome to Our Car Service Center</h1>
          <p>Book your service now for the best care of your vehicle.</p>
          <Link to="/services" className="btn btn-primary">Book Now</Link>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="services-section">
        <div className="row">
          {/* Example Service Cards */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Washing Packages</h5>
                <p className="card-text">Choose from our variety of washing packages.</p>
                <Link to="/services/washing-packages" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lubrication Services</h5>
                <p className="card-text">Keep your vehicle running smoothly with our lubrication services.</p>
                <Link to="/services/lubrication" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Treatment Services</h5>
                <p className="card-text">Enhance your vehicle's performance with our treatment services.</p>
                <Link to="/services/treatment" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section text-center">
        <h2>Contact Us</h2>
        <p>Contact us for any inquiries or to schedule your service appointment.</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>
    </div>
  );
};

export default Home;
