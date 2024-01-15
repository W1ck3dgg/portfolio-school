import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Target-audience.module.css'

const TargetAudience = () => {
  const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/portfolio-project'); 
    };

    return (
        <div>
          <Navbar />
          <ImageSection 
                imagePath="/target-audience.png" 
                text="TARGET AUDIENCE & FEEDBACK" 
                onBackButtonClick={handleBackButtonClick}
            />
          <main className={styles.mainContent}>
<section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
          For my personal portfolio I have the teachers of Semester 6 as my target audience, because I will be doing Minor in Semester 7. In this page I will explain more about my target audience and their importance.
          </p>
          <div className={styles.imageRow}>
            <img src="/change.png" alt="Image 1" className={styles.sectionImage} />
            <img src="/change.png" alt="Image 2" className={styles.sectionImage} />
          </div>
        </section>
    
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Approach</h2>
              <p className={styles.sectionContent}>
                Throughout the semester I had three portfolio submissions, where I would get feedback from my two Assessors Paul and Stan. Not only that, but they were also available in school on Mondays and Tuesdays,
                where I could ask for their opinion on my current state of the portfolio and if there was something to be changed. I also took inspiration from my fellow coleagues and their way of creating a portfolio website.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Conclusion and Result</h2>
              <p className={styles.sectionContent}>
                My conclusion is that despite the online materials that are out there in the Internet, having frequent talks with my target audience, definitely helped me understand what was exactly expected of my website.
                The result of each talk with my teachers wass always really valuable and their guidance helped me to to polish portfolio. After every talk with them I got different insights which helped me make new iterations and with each the portfolio was better and better.
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

export default TargetAudience;
