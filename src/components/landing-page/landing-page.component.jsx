import React from "react";
import './landing-page.styles.css';

const LandingPage = () => (
    <section className="landing-page-container">
        <div className="logo-container">
            <h1>Surgical Cutz</h1>
            <h2>by MidKnight</h2>
        </div>
        <div className="button-container">
            <button>Book Now</button>
            <button>Prices</button>
        </div>
    </section>
);

export default LandingPage;
