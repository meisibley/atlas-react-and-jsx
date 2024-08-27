import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/mei-sibley/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/meisibley" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="social-icon" />
            </a>
        </div>
    );
}

export default SocialLinks;
