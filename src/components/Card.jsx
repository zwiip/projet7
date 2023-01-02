import '../assets/styles/sass/main.scss'

const Card = ({ title, cover }) => {
    return (
        <div className="card" style={{ backgroundImage: `URL(${cover})`}}>
            <div className='card_gradient'>
                <h2 className='card_title'>{ title }</h2>
            </div>
        </div>
    );
};

export default Card;