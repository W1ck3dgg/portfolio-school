import React from 'react';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';
import styles from '../components/Portfolio-project.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PortfolioProject = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/this-semester');
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
      <ImageSection imagePath="/portfolio-banner.png" text="PORTFOLIO" onBackButtonClick={handleBackButtonClick} />
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
            This semester individual project is to create a portfolio that will serve as a proof of my skills and progress during the semester. My task is to create this portfolio in a way,
            that my teachers will have an easy read with proper linking between my work. I will use this opportunity to test and hone my skills with coding and also learn something new during the process.
            In order to deliver a high-quality portfolio I applied various research activitieas such as literature studies, requirement lists, sketching, prototypying, defining and understanding my target audience
            to properly shape my portfolio.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Design challenge</h2>
          <p className={styles.sectionContent}>
            Design a portfolio website to showcase Fontys teachers my work during the semester.
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
            1. Which front-end technology would be best for creating the portfolio? CMD Methods : Literature Study, Requirements List
          </p>
          <p className={styles.sectionContent}>
            2. How to indicate if a portfolio is good-looking and representative?  CMD Methods : Usability Testing
          </p>
          <p className={styles.sectionContent}>
            3. What elements to include in a portfolio? CMD Methods : Best, good and bad practices, Literature Study
          </p>
          <p className={styles.sectionContent}>
            4.What expectations do teachers have from my portfolio?  CMD Methods : Prototyping, Usability Testing
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Phases</h2>
          <p className={styles.sectionContent} style={{ color: 'rgb(180, 3, 10)'}}>
             *Red highlighted text is clickable*
          </p>
          <p className={styles.sectionContent}>
            <strong>Research phase:</strong> During the research phase of this project, I had set myself a requirements list, a criteria that I wanted to fulfill. To begin with, we had the freedom to select how we want to code our portfolio,
            <Link legacyBehavior href="/code-choice" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer"> (1)so this is how I decided to code my portfolio.</a></Link>
          </p>
          <p className={styles.sectionContent}>
            Since I have never done a website portfolio before, I began my research on
            <Link legacyBehavior href="/structure-research" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer"> (3)styling, components of portfolio, colors and structure</a></Link>.
            After I learned more about structure and styling, I wanted to see how professionals do it and get inspirated.
            I looked at professional portfolios and saw that they have a common structure and pages. I really liked some of the styles, components and decided to include them in my portfolio.
          </p>
          <p className={styles.sectionContent}>
            <strong>Design phase:</strong>
          </p>
          <p className={styles.sectionContent}>
            After I was done with the research I began with some simple sketches, that slowly turned into a
            <a href="https://www.figma.com/file/46WZ8T4Ke8ttfep28CRuMw/Untitled?type=design&node-id=0%3A1&mode=design&t=IqTrHLsO6syOvooB-1" style={linkStyle} target="_blank" rel="noopener noreferrer"> (4)prototype</a>.
            I used Figma, for this project as it was easy to use and also accessible.
            With each
            <Link legacyBehavior href="/target-aaudience" passHref>
              <a style={linkStyle} target="_blank" rel="noopener noreferrer"> (4)teacher feedback</a>
            </Link>,
            the prototype underwent different phases and changes, until it was finally up to a state that could be implemented into code.
          </p>
          <p className={styles.sectionContent}>
            <strong>Building and testing phase:</strong>
          </p>
          <p className={styles.sectionContent}>
            In the beginning I had run into some issues with my code, because Next.js had a big update and was now using app routing, where during my last work with the framework there was a folder called pages where all web pages would go.
            Eventually I managed to fix the error, I had to start over and there was an option to select the other method of working, the one I was used to. Coding a website is really time consuming and sometimes it can get really frustrating if
            there is an error that can not be found. I was constantly doing <Link legacyBehavior href="/user-testings" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer"> (2)testings</a></Link> with another colleagues of mine, which helped me resolve some of the issues and do some minor adjustments. I noticed an issue with some of my fonts not applying properly and some of the images not loading on some of the browsers.
            After looking up for possible solutions I found out that some old browser versions use different extension for fonts as for the pictures it was cache related issue that was quickly resolved. After several tests my website was looking already better and more final-look.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reflection</h2>
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
