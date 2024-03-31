import React, { useState } from 'react';

function LegoSet({ name, description, imageUrl }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ margin: '20px', padding: '10px' }}>
      <h2>{name}</h2>
      {isVisible && <p>{description}</p>}
      <button style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Description
      </button>
      <img className="lego-image" src={imageUrl} alt={`LEGO set ${name}`} style={{ width: '100%', }} />
    </div>
  );
}

export default LegoSet;