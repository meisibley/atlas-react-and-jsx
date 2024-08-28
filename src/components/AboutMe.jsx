import React from "react";
import image from "../../images/IMG_4495.jpeg";

function AboutMe() {
    return (
        <div className="about-me">
            <img src={image} alt="Mei Sibley" />
            <p>My name is Mei Sibley, a full-stack student at Atlas School. I am currently in the 5th trimester. 
                My favorite language to work with is React. After school, I plan to pursue a career in software development. 
                Outside of school and work, I enjoy shopping, cooking, and eating. In my free time, I like to play Sudoku.
            </p>
        </div>
    );
}

export default AboutMe;
