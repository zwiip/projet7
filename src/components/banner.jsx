import React from "react";
import '../assets/styles/sass/main.scss'


const Banner = ({ image }) => {
    return (
        <div className="banner" style={{ backgroundImage: `URL(${image})`}}>
            
        </div>
    );
};

export default Banner;