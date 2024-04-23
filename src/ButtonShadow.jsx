import React from 'react';
import styles from './app.module.css';

export const ButtonShadow = ({ number, onClick }) => {
    
  const handleMouseDown = (event) => {
    event.target.classList.add(styles['button-shadow']);
  };

  const handleMouseUp = (event) => {
    event.target.classList.remove(styles['button-shadow']);
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove(styles['button-shadow']);
  };

  return (
    <button
      className={`${styles['calculator-button']}`}
      onClick={() => onClick(number)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {number}
    </button>
  );
};