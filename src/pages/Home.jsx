import Banner from '../components/banner'
import '../assets/styles/sass/main.scss';

function Home() {
  return (
    <div className="Home">
      <div>
        <Banner image="../assets/images/banner-home.png" />
      </div>
      <h1>Voici la page d'accueil</h1>
    </div>
  );
}

export default Home;