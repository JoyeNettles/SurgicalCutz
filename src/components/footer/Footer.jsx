import React from "react";
import jttw from '../../assets/images/jttw-favicon.ico';
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <p>In collaboration with <a href="http://www.joyetotheworld.com" target="_blank"
                                            rel="noopener noreferrer">Joye
                    to the World <img className='jttw-logo' src={jttw} alt='Joye to the World'/></a></p>
            </div>
        </>
    );
};

export default Footer;