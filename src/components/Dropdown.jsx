import React, { useState } from 'react';
import arrow from "../assets/images/arrow.png"

function Dropdown(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown-box">
      <div className="dropdown-box_header" onClick={handleClick}>
        <h2 className='dropdown-box_title'>{props.title}</h2>
        <div className="arrow">
            <img src={arrow} alt="arrow" className={isExpanded ? 'arrow-up' : 'arrow-down'} />
            </div>
      </div>
      {isExpanded && (
        <div className="dropdown-box_content">
          {props.children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
