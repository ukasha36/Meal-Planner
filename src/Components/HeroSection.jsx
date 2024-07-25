// src/components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css';
 import banner from '/banner.jpg';

 const HeroSection = () => {
    return (
        <div className="hero-section">
            <img src={banner} alt="Banner" className="hero-image" />
            <div className="overlay"></div>
            <div className="hero-text">
                <h1>Optimized Your Meal</h1>
                <p>Select Meal to Add in Week. You will be able to edit, modify and change the Meal Weeks.</p>
            </div>
        </div>
    );
};

export default HeroSection;
