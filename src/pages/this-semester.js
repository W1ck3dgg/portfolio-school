import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';
import styles from '../components/This-semester.module.css';

const ThisSemester = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/');
  };

  return (
    <div>
      <Navbar />
      <main className={styles.mainContent}>
        <ImageSection imagePath="/section-image-semester.jpg" onBackButtonClick={handleBackButtonClick} />
        <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
          <div className={styles.cardsContainer}>
          <a href="portfolio-project" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className={styles.card} style={{ backgroundImage: 'url(/portfolio.png)' }}>
              <div className={styles.cardText}>Portfolio</div>
            </div>
            </a>
            <a href="ddw" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className={styles.card} style={{ backgroundImage: 'url(/ddw.png)' }}>
              <div className={styles.cardText}></div>
            </div>
            </a>
            <a href="weyweyweb" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className={styles.card} style={{ backgroundImage: 'url(/wwb.png)' }}>
              <div className={styles.cardText}></div>
            </div>
            </a>
            <a href="group-project" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className={styles.card} style={{ backgroundImage: 'url(/group-project.png)' }}>
              <div className={styles.cardText}>Group project</div>
            </div>
            </a>
          </div>
        </section>
        <section className={styles.semesterSection}>
          <h2 className={styles.sectionTitle}>Reading Guides</h2>
          <div className={styles.cardsContainer}>
            <a href="/Reading Guide Portfolio.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className={styles.card} style={{ backgroundImage: 'url(/prg.png)' }}>
              </div>
            </a>
            <a href="/Reading Guide Group Project.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className={styles.card} style={{ backgroundImage: 'url(/gprg.png)' }}>
              </div>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className={styles.card} style={{ backgroundImage: 'url(/iwrg.png)' }}>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThisSemester;
