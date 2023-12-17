import React from 'react';
import styles from './ImageSection.module.css';

const ImageSection = ({ text, imagePath, onBackButtonClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        ←
      </button>
      <img src={imagePath} alt="Section Title" className={styles.image} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default ImageSection;
