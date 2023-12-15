import React from 'react';
import styles from './ImageSection.module.css'; 

const ImageSection = ({ text, imagePath }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="Section Title" className={styles.image} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default ImageSection;
