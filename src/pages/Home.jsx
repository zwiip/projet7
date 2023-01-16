import Banner from '../components/banner'
import Card from '../components/Card';
import '../assets/styles/sass/main.scss';
import image from "../assets/images/banner-home.png";
import { useState, useEffect } from 'react';

/**
 * Permet de récupérer les données de logements afin d'afficher les éléments de la page d'accueil
 * @returns un conteneur "Home" dans lequel vient s'insérer dynamiquent :
 *     - le composant banner
 *     - les cards pointant vers les fiches logements
 */
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('./logements.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => setData(data))
    .catch((error) => console.error(error));
}, []);

  return (
    <div className="Home">
      <div>
        <Banner image={image} text1="Chez vous," text2="partout et ailleurs" />
      </div>
      <div className='cardContainer'>
      {data ? data.map(item => {
          return (
            <Card
              key={item.id}
              id={item.id} 
              title={item.title} 
              cover={item.cover}
            />
          );
        }) : <p>problème de chargement des datas</p> }
      </div>
    </div>
  );
}

export default Home;