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
        <section className={styles.semesterSection}>
          <h2 className={styles.sectionTitle}>What have I done this semester</h2>
          <div className={styles.cardsContainer}>
            {/* <div className={styles.card} style={{ backgroundImage: 'url(/wireframes.png)' }}>
              <div className={styles.cardText}>Wireframes</div>
            </div> */}
            <a href="https://www.figma.com/file/46WZ8T4Ke8ttfep28CRuMw/Untitled?type=design&node-id=0%3A1&mode=design&t=IqTrHLsO6syOvooB-1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className={styles.card} style={{ backgroundImage: 'url(/figma.png)' }}>
                <div className={styles.cardText}>Portfolio prototype</div>
              </div>
            </a>
            <a href="https://www.figma.com/file/f6lvw1UVxtUMA4fqSOYVNj/DataDash_Mockups?type=design&node-id=145%3A125&mode=design&t=IqTrHLsO6syOvooB-1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className={styles.card} style={{ backgroundImage: 'url(/figma.png)' }}>
                <div className={styles.cardText}>Project prototypes</div>
              </div>
            </a>
              {/* <div className={styles.card} style={{ backgroundImage: 'url(/interview.png)' }}>
                <div className={styles.cardText}>Interviews</div>
              </div> */}
          </div>
        </section>
        <h2 className={styles.projectsTitle}>Explore my projects</h2>
        <section className={styles.projectsSection}>
          <div className={styles.projectsLabel}>My Projects</div>
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
            <div className={styles.card} style={{ backgroundImage: 'url(/wwb.png)' }}>
              <div className={styles.cardText}></div>
            </div>
            <div className={styles.card} style={{ backgroundImage: 'url(/group-project.png)' }}>
              <div className={styles.cardText}>Group project</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThisSemester;
