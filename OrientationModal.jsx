import React, { useState, useEffect } from 'react';
import './OrientationModal.css'
const OrientationModal = (message, textColor, backgroundColor) => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isPortrait) return null;

  return (
    <div className="orientation-overlay">
      <div className="orientation-modal" style={{color: textColor, backgroundColor:backgroundColor}}>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default OrientationModal;
