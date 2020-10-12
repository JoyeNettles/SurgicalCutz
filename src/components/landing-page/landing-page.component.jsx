import React from "react";
import logo from '../../assets/images/Surgical Cutz Logo.png';

import './landing-page.styles.scss';

const LandingPage = () => (
    <div className='landing-page'>
        <h1>Surgical Cuts</h1>
        <div className="button-container">
            <h2>
                <a href="https://calendly.com/surgicalcutz/haircut" rel="noopener noreferrer" target="_blank">
                    Book
                </a>
            </h2>
            <h2>
                <a href="https://instagram.com/surgicalcutz_" rel="noopener noreferrer" target="_blank">
                    Instagram
                </a></h2>
            <h2>
                <a href="mailto:surgicalcutz@gmail.com" rel="noopener noreferrer" target="_blank">
                    Contact
                </a></h2>
        </div>
    </div>
);

export default LandingPage;
