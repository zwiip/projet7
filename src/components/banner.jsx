import React from "react";
import '../assets/styles/sass/main.scss'

/**
 * Permet de créer le composant Banner
 * @param {string} image : l'url de l'image de fond
 * @param {string} text1
 * @param {string} text2 : la séparation du texte en deux (span) permet de contrôler le retour à la ligne sur les petits écrans
 * @returns affiche le composant banner avec avec l'image de fond et le titre en sur-impression
 */
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