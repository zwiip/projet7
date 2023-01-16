import Dropdown from "../components/Dropdown"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../assets/styles/sass/main.scss';
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import Stars from "../components/Stars";

/**
 * utilisation de useParams pour récupérer l'ID du logement à afficher à partir de l'URL,
 * puis vérification que les données sont chargées correctement et que l'id existe,
 * si ok : recherche le logement correspondant à l'ID dans data
 * @returns le contenu de la page avec composants importés pour afficher les détails du logement.
 */
function Details() {
    const { id } = useParams();

/**
 * permet de récupérer les données et les stocker dans "data"
 * notez qu'ici useEffect charge les données des logements à partir d'un fichier JSON à l'aide de la fonction fetch.
 * Il sera possible de remplacer le chemin du fichier JSON par l'url de l'api une fois celle-ci implémentée.
 */
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`../logements.json`)
            .then((res) => {
                return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    /**
     * permet d'afficher un message d'erreur sur la page si les données ne sont pas chargées
     */
    if (data.length === 0) {
        return (
            <p>problème de chargement des datas</p>
        )
    }
    const item = data.find(item => item.id === id);

    /**
     * Permet de rediriger l'user si l'id n'existe pas
     */
    if (!item) {
        window.location.replace('/NotFound');
        return null;
    }

    return (
        <div className="details">
            <Gallery images={item.pictures} />
            <div className="details_header">
                <div className="details_header_housing">
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.location}</p>
                    </div>
                    <div className="details_features_tags">
                        <Tag tags={item.tags} />
                    </div>
                </div>

                <div className="details_header_user">
                    <div className="details_header_user_info">
                        <div className="details_header_name">
                            <p>{item.host.name.split(' ')[0]}</p>
                            <p>{item.host.name.split(' ')[1]}</p>
                        </div>
                        <img src={item.host.picture} alt={item.host.name} className="details_header_avatar" />
                    </div>
                    <div className="details_header_stars">
                        <Stars rating={item.rating} />
                    </div>
                </div>
            </div>
                
            <div className="details_content">
                <Dropdown title="Description">
                    <p>{item.description}</p>
                </Dropdown>
                <Dropdown title="Équipements">
                    <ul>
                        {item.equipments.map(equipment => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                </Dropdown>
            </div>
        </div>
    )
};

export default Details
