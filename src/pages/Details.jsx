import Dropdown from "../components/Dropdown"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'


function Details() {
    const { id } = useParams();
    const location = useLocation();

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`../logements.json`)
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    console.log('je récupère les data', data)

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
            <div className="details_carrousel">
                Ici s'affichera mon carrousel
            </div>
            <div className="details_header">
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.location}</p>
                </div>
                <div className="details_header_user">
                    <div className="details_header_name">
                        <p>{item.host.name.split(' ')[0]}</p>
                        <p>{item.host.name.split(' ')[1]}</p>
                    </div>
                    <img src={item.host.picture} alt={item.host.name} className="details_header_avatar" />
                </div>
            </div>
            <div className="details_features">
                <div className="details_features_tags">
                    <tag />
                    <tag />
                    <tag />
                </div>
                <div className="details_features_stars">

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
