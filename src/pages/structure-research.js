import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Structure-research.module.css'

const StructureResearch = () => {
  const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/portfolio-project'); 
    };

    const textStyle = {
        color: 'black',
      };

    return (
        <div>
          <Navbar />
          <ImageSection 
        imagePath="/structure.png" 
        text="HOW TO STRUCTURE & DESIGN A PORTFOLIO" 
        onBackButtonClick={handleBackButtonClick}
        textStyle={textStyle}
        />
        
          <main className={styles.mainContent}>
          <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
          The purpose of this research is to understand how to structure, design, include and what colors to include in my portfolio.
          </p>
          <div className={styles.imageRow}>
            <img src="/change.png" alt="Image 1" className={styles.sectionImage} />
            <img src="/change.png" alt="Image 2" className={styles.sectionImage} />
          </div>
        </section>
    
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Research Methods</h2>
              <p className={styles.sectionContent}>
                For this research I made use of the following Methods - Literature Study and Requirements List.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Requirements List</h2>
              <p className={styles.sectionContent}>
               In order to properly select a framework, I had specific needs that the framework would need to meet.
              </p>
          <p className={styles.sectionContent}>
          1. Ease of use: It is important to me to be well documented, have some examples and to be easy to start/install.
          </p>
          <p className={styles.sectionContent}>
          2. Performance: Of course performance is always a preffered quality when it comes to creating any kind of projects. In terms of rendering speed and efficiency.
          </p>
          <p className={styles.sectionContent}>
          3. Flexibility and customizability: How easily the framework can be adapted to my specific needs. Can it be customized easily? Does it allow for the integration of other libraries and tools?
          </p>
          <p className={styles.sectionContent}>
          4. Features: Find out what built-in features there are such as state management, routing, and server-side rendering.
          </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Retrospect</h2>
              <p className={styles.sectionContent}>
                I believe my teachers and assessors were very experiencedd on this topic, and really gave me good feedback and their guidance definitely was benificial for my end-result. If I happen to work on a similar project 
                I would ask different teachers from the same semester for feedback as I thought if I ask other teachers that are not my assessors might not be helpful as they might have different view and requirements,
                but at the same time they could provide me with valuable information, so I would definitely give it a chance.
              </p>
            </section>
          </main>
        </div>
      );
    };

export default StructureResearch;