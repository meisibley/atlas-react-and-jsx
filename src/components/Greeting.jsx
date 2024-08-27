import React from "react";
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

function Greeting() {
    const now = new Date();
    const currentHour = now.getHours(); // Gets the current hour (0-23)
    
    let greetingText;
    let logo;

    // Determine the appropriate greeting and image based on the time of day
    if (currentHour >= 6 && currentHour < 12) {
        greetingText = "Good Morning!";
        logo = day;
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingText = "Good Afternoon!";
        logo = day;
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingText = "Good Evening!";
        logo = evening;
    } else {
        greetingText = "Good Night!";
        logo = night;
    }

    return (
        <h1 className="greeting">
            <img src={logo} alt={greetingText.split(" ")[1].toLowerCase()} />
            {greetingText}
        </h1>
    );
}

export default Greeting;
