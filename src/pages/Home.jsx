import Banner from '../components/banner'
import '../assets/styles/sass/main.scss';
import image from "../assets/images/banner-home.png";

function Home() {
  return (
    <div className="Home">
      <div>
        <Banner image={image} text1="Chez vous," text2="partout et ailleurs" />
      </div>
      <div className='cardContainer'>
      ici apparaitront les cartes logements
      </div>
    </div>
  );
}

export default Home;