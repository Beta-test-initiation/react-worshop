import React, { useState } from 'react';
import './LegoSet.css'; // Import the external CSS file

function LegoSet({ name, description, imageUrl }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="lego-set-container">
      <h2>{name}</h2>
      {isVisible && <p>{description}</p>}
      <button className="toggle-btn" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Description
      </button>
      <img className="lego-image" src={imageUrl} alt={`LEGO set ${name}`} />
    </div>
  );
}

export default LegoSet;