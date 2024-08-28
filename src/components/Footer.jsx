import React from "react";
import links from "../assets/links.json";

function Footer() {
    const now = new Date();
    const year = now.getFullYear();

    return (
        <footer>
            <ul>
                {links.map((item) => (
                    <li key={item.label}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p>© {year} Atlas School</p>
        </footer>
    );
}

export default Footer;
