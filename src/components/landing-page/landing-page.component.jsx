import React from "react";
import './landing-page.styles.css';

const LandingPage = () => (
    <>
        <div className="logo-container">
            <div className="header-text"><h1>Surgical Cutz</h1></div>
            <h2>by MidKnight</h2>
        </div>
        <div className="button-container">
            <a href="https://calendly.com/surgicalcutz/45" target="_blank">
                <button>Book Now</button>
            </a>
        </div>
    </>
);

export default LandingPage;
