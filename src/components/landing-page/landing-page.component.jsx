import React from "react";
import logo from '../../assets/images/Surgical Cutz Logo.png';

import './landing-page.styles.scss';

const LandingPage = () => (
    <div className='landing-page'>
        <div className="logo-container">
            <img src={logo} alt='Surgical Cutz Logo'/>
        </div>
        <div className="button-container">
            <a href="https://instagram.com/surgicalcutz_" target="_blank">
                <img src="https://img.icons8.com/wired/64/000000/instagram-new.png"/>
            </a>
            <a href="mailto:surgicalcutz@gmail.com" target="_blank">
                <img src="https://img.icons8.com/wired/64/000000/email.png"/>
            </a>
        </div>
    </div>
);

export default LandingPage;
