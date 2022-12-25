import React from "react";
import '../assets/styles/sass/main.scss'


const Banner = ({ image }) => {
    return (
        <div className="banner" style={{ backgroundImage: `URL(${image})`}}>
            Mon composant Banner
        </div>
    );
};

export default Banner;