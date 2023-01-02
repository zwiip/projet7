import '../assets/styles/sass/main.scss'

const Card = ({ title, cover }) => {
    return (
        <div className="card" style={{ backgroundImage: `URL(${cover})`}}>
            <h2 className='card-title'>{ title }</h2>
        </div>
    );
};

export default Card;