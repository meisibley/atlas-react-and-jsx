import React from "react";
import Greeting from "./Greeting.jsx";
import SocialLinks from "./SocialLinks.jsx";
import '../index.css';

function Header() {
    return (
        <nav>
            <Greeting />
            <SocialLinks />
        </nav>
    );
}

export default Header;
