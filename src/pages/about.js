import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../components/About.module.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.mainContent}>
      <div className={styles.greetingText}>
          👋, my name is Presiyan and I am a student at <span className={styles.fontysColor}>Fontys</span>.
        </div>
        <div className={styles.imageContainer}>
          <img src="/pht.png" alt="About Me" className={styles.aboutImage} />
        </div>
        <div className={styles.aboutText}>
          <p>During my studies I learned a lot and got to experience many professional working environments where all sides received positive outcome.</p>
          <p>The people I have worked with say that I am a passionate and fun to work with.</p>
          <p>By willing to achieve my dreams and goals, I look for inspiration and new ways to better my work with each project.</p>
        </div>
        <div className={styles.testimonialsSection}>
          <div className={styles.testimonialCard}>
            <img src="/todor.png" alt="Person 1" className={styles.testimonialAvatar} />
            <h3 className={styles.testimonialName}>Todor Georgiev</h3>
            <p className={styles.testimonialText}>Presiyan is a very hard working student, when I usually come around him, he is always highly concentrated on the project, so that in my opinion means that he is putting a lot of effort into everything.</p>
          </div>
          <div className={styles.testimonialCard}>
            <img src="/kim.png" alt="Person 2" className={styles.testimonialAvatar} />
            <h3 className={styles.testimonialName}>Kim Oppers</h3>
            <p className={styles.testimonialText}>Presiyan always brings good energy to group projects and works hard to reach his goals.</p>
          </div>
          <div className={styles.testimonialCard}>
            <img src="/mazoun.jpeg" alt="Person 4" className={styles.testimonialAvatar} />
            <h3 className={styles.testimonialName}>Mazoun Al Habsi</h3>
            <p className={styles.testimonialText}>Working with Presiyan has been really cool. Hes serious about getting work done on time but also knows how to have fun. Hes reliable when we need things done, never giving up even when faced with obstacles. Hes determined to finish what he starts, and hes good at working under pressure. Its been fun teaming up with Presiyan, and I totally think hes great.</p>
          </div>
          <div className={styles.testimonialCard}>
            <img src="/negin.png" alt="Person 5" className={styles.testimonialAvatar} />
            <h3 className={styles.testimonialName}>Negin Bokaeiolmousavi</h3>
            <p className={styles.testimonialText}>Presiyan is incredibly supportive and hardworking, consistently bringing dedication to our team. Working with him is a real asset, and I appreciate the effort he puts in every day.</p>
          </div>
        </div>
        <div className={styles.factsSection}>
        <h2 className={styles.factsTitle}>
            <span className={styles.factsWord}>Some</span>
            <span className={styles.factsHighlight}> Facts </span>
            <span className={styles.factsWord}>About Me</span>
          </h2>
          <ul className={styles.factsList}>
          <li>
            Most of my free time <span className={styles.highlight}>I listen</span> to music and I like all kinds of music and genres, but my favorite are
            <span className={styles.genre}> pop,</span>
            <span className={styles.genre}> dnb,</span>
            <span className={styles.genre}> rock,</span>
            <span className={styles.genre}> country,</span>
            <span className={styles.genre}> rap,</span>
            <span className={styles.genre}> jpop,</span>
            <span className={styles.genre}> pop-folk,</span>
            <span className={styles.genre}> classical</span>
          </li>
          <li>I like playing competitive games and I also like and want to be good at them as I think I am a very <span className={styles.highlight}>competitive person</span>.</li>
          <li>Recently I started playing piano, so I love <span className={styles.highlight}>practicing</span> and <span className={styles.highlight}>improvising</span> melodies.</li>
        </ul>
        </div>
        <div className={styles.gifContainer}>
          <img src="https://i.pinimg.com/originals/1c/76/5c/1c765c0d5963c84864bece62355713e0.gif" alt="Fun GIF" className={styles.funGif} />
        </div>
      </main>
    </div>
  );
};

export default About;
