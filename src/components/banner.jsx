import React from "react";
import '../assets/styles/sass/main.scss'


const Banner = ({ image, text1, text2 }) => {
    return (
        <div className="banner" style={{ backgroundImage: `URL(${image})`}}>
            <h1 className="banner-text">
                <span>{text1}</span>&nbsp;<span>{text2}</span>
            </h1>
        </div>
    );
};

export default Banner;