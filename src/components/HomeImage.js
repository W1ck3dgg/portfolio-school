import React from 'react';
import Link from 'next/link';
import styles from './HomeImage.module.css';

const HomeImage = () => {
  return (
    <div className={styles.container}>
      <img src="/fin2.png" alt="Featured Work" className={styles.image} />
      <div className={styles.textWrapper}>
        <Link legacyBehavior href="/this-semester">
          <a className={styles.text}>EXPLORE MY WORK</a>
        </Link>
      </div>
    </div>
  );
};

export default HomeImage;
