import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../components/About.module.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.imageContainer}>
          <img src="/pht.png" alt="About Me" className={styles.aboutImage} />
        </div>
      </main>
    </div>
  );
};

export default About;
