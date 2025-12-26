import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Homepage.css'

function Homepage() {
    const Homepage=()=>{
        const navigate= useNavigate();
    }
  return (
        <div className="homepage">
            <div className="homepage-header">
                <h2 className="homepage-title">Welcome to PharmaCare</h2>
                <p className="homepage-subtitle">Your Trusted Online Pharmacy for quality medicines</p>
                <button className="homepage-button" onClick={()=> navigate('/medicines')}>Shop Now</button>
            </div>
            <div className="homepage-features">
                <div className="homepage-card">
                    <div className="homepage-card-icon">💊</div>
                    <h3>Fast Delivery</h3>
                    <p>Get your medicines delivered to your doorstep quickly and safely.</p>
                </div>     
                <div className="homepage-card">
                    <div className="homepage-card-icon">💳</div>
                    <h3>Secure Payments</h3>
                    <p>Enjoy secure and hassle-free payment options for a smooth shopping experience.</p>
                </div>          
                <div className="homepage-card">
                    <div className="homepage-card-icon">📞</div>
                    <h3>24/7 Support</h3>
                    <p>Our customer support team is available around the clock to assist you.</p>
                </div>          
                <div className="homepage-card">
                    <div className="homepage-card-icon">🔒</div>
                    <h3>Privacy Guaranteed</h3>
                    <p>Your personal information and medical data are safe with us.</p>
                </div>          
            </div>
            </div>
  );
};

export default Homepage
