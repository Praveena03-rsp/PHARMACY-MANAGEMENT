import React from 'react';
import './AboutPage.css';

function AboutPage() {
    const AboutPage=()=>{
        return(
            <div className="aboutpage">
                <h2 className="aboutpage-title">About PharmaCare</h2>
                <div className="aboutpage-content">
                    <p>PharmaCare is your trusted online pharmacy dedicated to providing high-quality medicines and healthcare products at your fingertips. Our mission is to make healthcare accessible, affordable, and convenient for everyone.</p>
                    <h3 className="aboutpage-subtitle">Our Aim</h3>
                    <p>Our aim is to provide a seamless and reliable platform for all your healthcare needs, ensuring that quality medications and health products are always within reach.</p>
                    <h3 className="aboutpage-subtitle">Why Choose Us?</h3>
                    <ul className ="aboutpage-list">
                        <li>Wide selection of medicines and health products</li>
                        <li>Fast and reliable delivery</li>
                        <li>Competitive pricing</li>
                        <li>Expert advice and support</li>
                        <li>Licensed pharmacists</li>
                    </ul>

                </div>
            </div>
  );
};}


export default AboutPage;
