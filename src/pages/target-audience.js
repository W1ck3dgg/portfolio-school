import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Target-audience.module.css'
import Link from 'next/link';

const TargetAudience = () => {
  const router = useRouter();

    const handleBackButtonClick = () => {
        router.push('/portfolio-project'); 
    };
    
    const linkStyle = {
      color: 'rgb(180, 3, 10)',
      textDecoration: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
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
          For my personal portfolio I have the teachers of Semester 6 as my target audience, because I will be doing Minor in Semester 7. In this page I will explain more about my target audience, their importance and feedback.
          </p>
        </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Approach</h2>
              <p className={styles.sectionContent}>
                Throughout the semester I had three portfolio submissions, where I would get feedback from my two Assessors Paul and Stan. Not only that, but they were also available in school on Mondays and Tuesdays,
                where I could ask for their opinion on my current state of the portfolio and if there was something to be changed. I also took inspiration from my fellow coleagues and their way of creating a portfolio website.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>First Submisssion Summary</h2>
              <p className={styles.sectionContent}>
                For the first submission, I only submitted a <Link legacyBehavior href="/portfolio-prototype" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer"> Prototype</a></Link>.
                I got positive feedback and proceeded with coding it.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Second Submission Summary</h2>
              <p className={styles.sectionContent}>
                After the second submission I got feedback that I needed to make my research questions clear and answer them and clearly define the target audience. I had to update my 
                Research questions and add at least 2 DOT/CMD Methods for each question. 
              </p>
              <p className={styles.sectionContent}>
                I went into canvas and checked the requirements. I understood the mentioned why, how and conclusion/recommendation framework. I adjusted my findings and updated my documents using that method.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Third Submission Summary</h2>
              <p className={styles.sectionContent}>
                 My third canvas feedback was a bit negative, and I was expecting it, because at the time of the submission I didn't really update my portfolio and didn't fill it up with
                 content that the teachers could give enough feedback. I needed to submit and finalize a reading guide for each project and fill the gaps I had(Learning outcomes, Group Project, Internation weeks).  
              </p>
              <p className={styles.sectionContent}>
                 At this stage, I clearly knew what I had to work towards. I was focusing more on group project and left my personal project lacking a bit. But during the holidays I stepped up and filled the portfolio with more content.
                 I made use of an integrated reading guide in the main pages of my projects. During the first weeks of the new year I had feedback session with Paul and he liked the way I had my portfolio structured and it was easy to follow and read and he also saw that I had more content in there.
                 He only gave me feedback to make offline documents for the final submission, in case my portfolio website gets shut down after the deadline and for archiving purposes. For which I created 4 separate Reading guides for each project I worked on.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Retrospect</h2>
              <p className={styles.sectionContent}>
                I believe my teachers and assessors were very experienced on this topic, and really gave me good feedback and their guidance definitely was benificial for my end-result. If I happen to work on a similar project 
                I would ask different teachers from the same semester for feedback as I thought if I ask other teachers that are not my assessors might not be helpful as they might have different view and requirements,
                but at the same time they could provide me with valuable information, so I would definitely give it a chance.
              </p>
            </section>
          </main>
        </div>
      );
    };

export default TargetAudience;
