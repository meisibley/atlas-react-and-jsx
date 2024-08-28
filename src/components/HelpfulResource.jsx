import React from "react";
import OpenLink from "./OpenLink.jsx";
import CopyLink from "./CopyLink.jsx";

function HelpfulResource({ label, link }) {
    return (
        <div className="helpful-resource">
            <p>{label}</p>
            <OpenLink link={link} />
            <CopyLink link={link} />
        </div>
    );
}

export default HelpfulResource;
