import React from 'react';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';
import styles from '../components/This-semester.module.css';

const ThisSemester = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.mainContent}>
        <ImageSection imagePath="/section-image-semester.jpg" />
        <section className={styles.semesterSection}>
          <h2 className={styles.sectionTitle}>What have I done this semester</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}><div className={styles.cardText}>Wireframes</div></div>
            <div className={styles.card}><div className={styles.cardText}>Portfolio prototype</div></div>
            <div className={styles.card}><div className={styles.cardText}>Project prototypes</div></div>
            <div className={styles.card}><div className={styles.cardText}>Interviews</div></div>
          </div>
        </section>
        <h2 className={styles.projectsTitle}>Explore my projects</h2>
        <section className={styles.projectsSection}>
          <div className={styles.projectsLabel}>My Projects</div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}><div className={styles.cardText}>Portfolio</div></div>
            <div className={styles.card}><div className={styles.cardText}>DDW</div></div>
            <div className={styles.card}><div className={styles.cardText}>WeyWeyWeb</div></div>
            <div className={styles.card}><div className={styles.cardText}>Group project</div></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThisSemester;
