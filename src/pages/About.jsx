import '../assets/styles/sass/main.scss'
import Banner from '../components/banner'
import image from '../assets/images/banner-about.png'
import Dropdown from '../components/Dropdown';

/**
 * Permet d'afficher les éléments composant la page d'à propos
 * @returns un conteneur "about" qui affiche :
 *    - le composant banner
 *    - plusieurs composants Dropdown, et qui en définit le contenu
 */
const About = () => (
    <div className='about'>
        <Banner image={image} />
        <Dropdown title="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </Dropdown>
        <Dropdown title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Dropdown>
        <Dropdown title="Service">
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Dropdown>
        <Dropdown title="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Dropdown>
    </div>
);

export default About
