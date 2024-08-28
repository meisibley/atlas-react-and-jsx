import React from "react";
import copyIcon from "../assets/copy.svg";
import "../index.css";

function CopyLink({ link }) {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div>
            <img
                src={copyIcon}
                alt="Copy link"
                onClick={() => copyToClipboard(link)}
                className="copy"
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}

export default CopyLink;
