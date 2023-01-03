import Dropdown from "../components/Dropdown"


function Details() {
    return (
        <div className="details">
            <div className="details_carrousel">
                Ici s'affichera mon carrousel
            </div>
            <div className="details_header">
                <div>
                    <h1>titre</h1>
                    <p>localisation</p>
                </div>
                <div className="details_header_user">
                    <div className="details_header_name">
                    <p>prénom</p>
                    <p>nom</p>
                    </div>
                    <img src="" alt="" className="details_header_avatar" />
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
                    <p></p>
                </Dropdown>
                <Dropdown title="Équipements">
                    <p></p>
                </Dropdown>
            </div>
        </div>
    )
};

export default Details
