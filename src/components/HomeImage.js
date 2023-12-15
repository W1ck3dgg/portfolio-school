import React from 'react';
import styles from './HomeImage.module.css';

const HomeImage = () => {
  return (
    <div className={styles.container}>
      <img src="/fin2.png" alt="Featured Work" className={styles.image} />
      <div className={styles.textWrapper}>
        <div className={styles.text}>EXPLORE MY WORK</div>
      </div>
    </div>
  );
};

export default HomeImage;
