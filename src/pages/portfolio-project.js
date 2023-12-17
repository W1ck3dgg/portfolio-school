import React from 'react';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';
import styles from '../components/Portfolio-project.module.css';

const PortfolioProject = () => {
  return (
    <div>
      <Navbar />
        <ImageSection imagePath="/Portfolio-banner.png" text="PORTFOLIO" />
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
            This is a personal project of semester 6, Advanced Media Design. Every student is task to create their own portfolio website to display their work during the semester,
            however some students, including me are not going to look for graduation internship next semester, but do a minor instead, so my target audience and content is different.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Questions</h2>
          <p className={styles.sectionContent}>
            Main Question: How to create a good-looking and representative portfolio that will serve to showcase my work to the teachers? 
          </p>
          <p className={styles.sectionContent}>
          Sub questions:  
          </p>
          <p className={styles.sectionContent}>
          1. Which front-end technology would be best for creating the portfolio? CMD Methods : Literature Study 
          </p>
          <p className={styles.sectionContent}>
          2. How to indicate if a portfolio is good-looking and representative?  CMD Methods : Literature Study, Usability Testing 
          </p>
          <p className={styles.sectionContent}>
          3. What elements to include in a portfolio? CMD Methods : Best, good and bad practices, Literature Study 
          </p>
          <p className={styles.sectionContent}>
            4. What expectations do teachers have from my portfolio?  CMD Methods : Prototyping, Usability Testing
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Result & Conclusion</h2>
          <p className={styles.sectionContent}>
            Creating my portfolio website for semester 6 was hard and at the same time fun task to do. I developed further my javascript and design skills, which will help me with the rest of my studies. 
            It allowed me to display the projects and skills I developed throughout the semester. 
            This portfolio will serve to present my work to teachers, as well for personal reflection and growth. 
            Building this portfolio website helped me see my progress, making it an essential tool for both self-assessment and development. 
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Retrospect</h2>
          <p className={styles.sectionContent}>
            This project helped me realize it was more than just an assignment. It was a whole journey of self-development! I faced a lot of troubles along my way, from wondering how to design and structure my website to 
            how to actually creating it. I used to work with this javascript framework during my last semester and I really enjoyed it so I wanted to further develop my skills with it. I started by creating sketches and then a prototype.
            I took inspiration from various good-looking portfolios of successful designers and also my fellow coleagues. I gained deeper appreciation for the work I had done over this semester while creating this portfolio.
            The feedback from my teachers definitely super valuable, providing me with insights and perspectives I hadn't thought of. I am so happy how my portfolio website turned out to be.
            However, in the future I plan to do things a little bit differently. Next time, I want to have and try ask a professional designer to give me feedback on my designs to see and understand their way of thinking and working.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PortfolioProject;
