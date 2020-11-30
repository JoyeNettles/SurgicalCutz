import React from "react";
import logo from '../../assets/images/Surgical Cutz Logo.png';

import './landing-page.styles.scss';
import Footer from "../footer/Footer";

const LandingPage = () => (
    <div className='container'>
        <div className='landing-page vertical-center'>
            <img
                alt={'Surgical Cutz'}
                src={logo}
            />
            <div className="button-container">
                <a href="https://calendly.com/surgicalcutz/haircut" rel="noopener noreferrer" target="_blank">
                    <h2>Book</h2>
                </a>

                <a href="https://forms.gle/i4cmVitfV1dtNx2r7" rel="noopener noreferrer" target="_blank">
                    <h2>Clients</h2>
                </a>

                <a href="https://instagram.com/surgicalcutz_" rel="noopener noreferrer" target="_blank">
                    <h2>Instagram</h2>
                </a>

                <a href="mailto:surgicalcutz@gmail.com" rel="noopener noreferrer" target="_blank">
                    <h2>Contact</h2>
                </a>
            </div>
        </div>
        <Footer />
    </div>
);

export default LandingPage;
