function Stars({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="star filled">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            &#9733;
          </span>
        );
      }
    }
    return <div className="stars">{stars}</div>;
  }
  
  export default Stars;