import React from "react";
import './landing-page.styles.css';
import Footer from "../footer/footer.component";

const LandingPage = () => (
    <>
        <div className="content">
            <div className="logo-container">
                <h1>Surgical Cutz</h1>
                <h2>by MidKnight</h2>
            </div>
            <div className="button-container">
                <button>Book Now</button>
            </div>
        </div>
    </>
);

export default LandingPage;
