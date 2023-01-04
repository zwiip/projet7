import { useNavigate } from 'react-router-dom';
import '../assets/styles/sass/main.scss'

/**
 * Permet de définir les objets passé dans les props
 * useNavigate permet de déclencher une navigation vers la route /location/:id en utilisant l'ID de l'objet passé dans les props du composant Card
 * @param {*} props : l'id sert de key et pour la navigation, le titre et la cover pour rendre l'affichage de ces élements de façon dynamique
 * @returns la structure du composant 
 */
function Card(props) {
    const { id, title, cover } = props;
    const navigate = useNavigate();

    /**
     * Permet d'appeler navigate
     * handleClick est ensuite rattaché à l'évènement onClick pour déclencher la navigation lorsque l'utilisateur clique sur la page
     */
    const handleClick = () => {
        navigate(`/Details/${id}`);
    }

    return (
        <div className="card" onClick={handleClick} style={{ backgroundImage: `URL(${cover})`}}>
            <div className='card_gradient'>
                <h2 className='card_title'>{ title }</h2>
            </div>
        </div>
    );
};

export default Card;