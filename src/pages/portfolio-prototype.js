import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Structure-research.module.css'
import Link from 'next/link';

const PPrototype = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/this-semester');
  };

  const textStyle = {
    color: 'black',
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
        imagePath="/figmabanner.png"
        text="Portfolio Prototype"
        onBackButtonClick={handleBackButtonClick}
        textStyle={textStyle}
      />

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
            The process started after validating the research and the design decisions, with quick sketches I created the first digital, clickable prototype, fully in figma.
            <Link legacyBehavior href="https://www.figma.com/file/46WZ8T4Ke8ttfep28CRuMw/Untitled?type=design&node-id=0%3A1&mode=design&t=9XFiXXglWeh7tnbP-1" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer"> Figma portfolio prototype(click)</a></Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research</h2>
          <p className={styles.sectionContent}>
          Before creating the design, I caried out a research to guide me with the task of creating a portfolio <Link legacyBehavior href="/structure-research" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer">styling, components of portfolio, colors and structure</a></Link>.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sketching</h2>
          <p className={styles.sectionContent}>
          Before implementing a clickable prototype I wanted to help myself visualize how my portfolio would look, so I started by creating sketches.
          </p>
          <div className={styles.imageRow}>
            <img src="/sk1.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/sk2.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/sk3.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Prototyping</h2>
      <p className={styles.sectionContent}>
        After I finalized my sketches, the next step was to create a clickable prototype that would eventualy get coded. I used Figma to prototype because its easy to use and has a lot of options and tools that
        would help me create my portfolio prototype, also having previous experience with it really helped me quickly create the first pages of the prototype.
      </p>
      <div className={styles.imageRow}>
        <img src="/firstlookport.png" alt="Poffertjes" className={styles.sectionImage} />
      </div>
      <p className={styles.sectionContent}>
        After I created my first version of the prototype, I asked for feedback from the teachers - 
      </p>
      <div className={styles.imageRow}>
        <img src="/rgbefore.png" alt="Poffertjes 1" className={styles.sectionImage} />
      </div>
      <p className={styles.sectionContent}>
        I was advised to change the approach when showing my documentation and process in my portfolio, so I switched to an integrated-reading guide-look. 
      </p>
      <div className={styles.imageRow}>
        <img src="/rgafter.png" alt="Poffertjes 1" className={styles.sectionImage} />
      </div>
      <p className={styles.sectionContent}>
        Another change that I made was to the now called learning outcomes page. I had a talk with Stan, asking for feedback and he advised me to switch the previous "My work" page to 
        "learning outcomes" page where I would list all my work put in their corresponding learning outcome category. 
      </p>
      <div className={styles.imageRow}>
        <img src="/lobefore.png" alt="Poffertjes 1" className={styles.sectionImage} />
      </div>
      <p className={styles.sectionContent}>
        On the image above, I have the old style of listing different type of work together, and the image bellow, the work is divided and put in the learning outcome categories. 
      </p>
      <div className={styles.imageRow}>
        <img src="/lochange.png" alt="Poffertjes 1" className={styles.sectionImage} />
      </div>
    </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conclusion</h2>
          <p className={styles.sectionContent}>
          Creating this prototype was an exciting experience. The research really helped out and roughly sketching my idea of the prototype really helped me narrow down the figma prototype. 
          With teacher feedback the prototype will really help me finalize the look and structure of the portfolio.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PPrototype;