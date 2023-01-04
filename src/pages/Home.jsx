import Banner from '../components/banner'
import Card from '../components/Card';
import '../assets/styles/sass/main.scss';
import image from "../assets/images/banner-home.png";
import { useState, useEffect } from 'react';

/**
 * Affichage des éléments structurant la page
 * @returns un conteneur "Home" dans lequel vient s'insérer :
 *     - le composant banner
 *     - les cards des fiches logements
 */
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('./logements.json')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => setData(data))
    .catch((error) => console.error(error));
}, []);
  console.log('je récupère les data', data)

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