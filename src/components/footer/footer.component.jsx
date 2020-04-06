import React from "react";
import './footer.styles.scss';

import JttwLogo from '../../assets/images/jttw-favicon.ico';

const Footer = () => (
    <footer>
        <h3>Website powered by
            <a href="http://www.joyetotheworld.com" target="_blank">
                <u> Joye to the World</u>
                <img src={JttwLogo}/>
            </a>
        </h3>
    </footer>
);

export default Footer;
