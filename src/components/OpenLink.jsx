import React from "react";
import openPoint from "../assets/open.svg";

function OpenLink({ link }) {
    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <img
                src={openPoint}
                alt="Open point"
                onClick={() => openLink(link)}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}

export default OpenLink;
