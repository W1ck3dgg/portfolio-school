import React from 'react';
import styles from './ImageSection.module.css';
import { useRouter } from 'next/router';

const ImageSection = ({ text, imagePath, textStyle }) => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/this-semester');
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBackButtonClick}>
        ←
      </button>
      <img src={imagePath} alt="Section Title" className={styles.image} />
      <div className={styles.text} style={textStyle}>{text}</div>
    </div>
  );
};

export default ImageSection;
