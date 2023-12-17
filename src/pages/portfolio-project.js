import React from 'react';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';
import styles from '../components/Portfolio-project.module.css';

const PortfolioProject = () => {
  return (
    <div>
      <Navbar />
        <ImageSection imagePath="/portfolio-banner.png" text="PORTFOLIO" />
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
            <strong>Main Question:</strong>
          </p>
          <p className={styles.sectionContent}>
            How to create a good-looking and representative portfolio that will serve to showcase my work to the teachers? 
          </p>
          <p className={styles.sectionContent}>
          <strong>Sub questions:</strong>  
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
          <a href="/target-audience" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <p className={styles.sectionContent}>
            4. What expectations do teachers have from my portfolio?  CMD Methods : Prototyping, Usability Testing
          </p>
          </a>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Approach</h2>
          <p className={styles.sectionContent}>
            <strong>Research phase:</strong>
          </p>
          <p className={styles.sectionContent}>
            During this phase I conducted multiple research sessions in order to find an answer to my research questions. Most of the materials online really proved useful, but for this project especially
            I believe that looking at different designs and getting inspired is what really gave the shape of my portfolio.
          </p>
          <p className={styles.sectionContent}>
            <strong>Design phase:</strong>
          </p>
          <p className={styles.sectionContent}>
            After I was done with my research I had to validate it. I began with some simple sketches, which eventually turned into a prototype. I used Figma, for this project as it was easy to use and also accessible.
            With each teacher feedback, the prototype underwent different phases and changes, until it was finally up to a state it could implemented as a code.
          </p>
          <p className={styles.sectionContent}>
            <strong>Building and testing phase:</strong>
          </p>
          <p className={styles.sectionContent}>
            In the beginning I had run into some issues with my code, because Next.js had a big update and was now using app routing, where during my last work with the framework there was a folder called pages where all web pages would go.
            Eventually I managed to fix the error, I had to start over and there was an option to select the other method of working, the one I was used to. Coding a website is really time consuming and sometimes it can get really frustrating if
            there is an error that can not be found. I was constantly doing tests with another colleagues of mine. I noticed an issue with some of my fonts not applying properly and some of the images not loading on some of the browsers.
            After looking up for possible solutions I found out that some old browser versions use different extension for fonts as for the pictures it was cache related issue that was quickly resolved. After several tests my website was done.
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
            how to actually creating it. I used to work with this javascript framework during my last semester and I really enjoyed it so I wanted to further develop my skills with it.Maybe for my future projects I would try a different framework and then compare.
            I took inspiration from various good-looking portfolios of successful designers and also my fellow coleagues. I gained deeper appreciation for the work I had done over this semester while creating this portfolio.
            The feedback from my teachers definitely super valuable, providing me with insights and perspectives I had not thought of. I am so happy how my portfolio website turned out to be.
            However, in the future I plan to do things a little bit differently. Next time, I want to have and try ask a professional designer to give me feedback on my designs to see and understand their way of thinking and working.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PortfolioProject;
