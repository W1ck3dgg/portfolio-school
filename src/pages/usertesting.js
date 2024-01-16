import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Target-audience.module.css'
import Link from 'next/link';

const UserTesting = () => {
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
        imagePath="/ustesting.png"
        onBackButtonClick={handleBackButtonClick}
      />
          <main className={styles.mainContent}>
          <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Usability Testing 1</h2>
            </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why?</h2>
          <p className={styles.sectionContent}>
          After I was done with the prototype, I had to also test it to find out if my foundings and research were good enough before I started coding.
          </p>
        </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>How?</h2>
              <p className={styles.sectionContent}>
               I found an available teacher from a past semester, that agreed to test my prototype. I had prepared questions and tasks in advance. I used my phone to record the meeting and also 
               to help me draw conclusions.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Teacher testing questions - Maikel Putman</h2>
              <p className={styles.sectionContent}>
                I first started with an introduction speech:
                You are going to see a website related to semester 6 personal assignment - A portfollio. 
                I will be asking you couple of questions to help me understand whether there is something to be added, changed or removed. 
                Before going through the website, could you tell me your first impressions.
              </p>
              <p className={styles.sectionContent}>
                Questions & Tasks:
              </p>
              <p className={styles.sectionContent}>
                Okay, now could you find any sort of navigation?
              </p>
              <p className={styles.sectionContent}>
                I would like you to explore my assigments for this semester.
              </p>
              <p className={styles.sectionContent}>
                I dont think we know each other very well, maybe you could get to know me better, could you try and find out how?
              </p>
              <p className={styles.sectionContent}>
                Now could you please go back to the main page? 
              </p>
              <p className={styles.sectionContent}>
                Any tips, feedback, or anything that you think is missing or maybe its too much? 
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Teacher testing summary & Conclusion</h2>
              <p className={styles.sectionContent}>
              First impressions : definitely my portfolio, heavenly feeling because of the clouds and the white colors, very clear menu, a logo(indeveleopment), a feeling of one pager, expecting work to be down(explaining animations) Structure of showcasing work is logical, grid with 4 different products(explaining the purpose, wireframe screen), explaining the bottom project screen, getting into explanations, getting feedback on it instead of project do phases or assignment, quickly caught up on testimonials, thinks its a good idea, asked about the fact 1 to see how different people understand it, some pictures felt loose(images of products/assignments), thinks red is better than bold to specify its important, font is heavy, the balance is a bit off, size-wise as well has to be balanced, clouds were liked(keeping the thematic everywhere), liked the fact the portfolio was presented in two different categories ( learning outcome wise and project specific), the distingion is important.
              </p>
              <p className={styles.sectionContent} style={{ fontWeight: 'bold', color: 'rgb(180, 3, 10)' }}>
               Conclusion:
              </p>
              <p className={styles.sectionContent}>
              The user testing session with the teacher provided insightful feedback on the Figma prototype of the portfolio. The initial impressions were highly positive, with the cloud theme and white color palette creating a 'heavenly' and clear aesthetic. The portfolio's structure, especially the grid layout displaying four different projects, was logical and effective in conveying the purpose and showcasing wireframes.
              Despite these strengths, the session highlighted areas for improvement. It was suggested to enhance the presentation by focusing on the development phases of projects, rather than just the final outcomes. This could offer a more comprehensive understanding of the creative process. The inclusion of testimonials was a well-received feature, adding a personal and credible touch to the portfolio.
              The feedback also emphasized the need for better visual balance. Suggestions included using red for emphasis instead of bold text and adjusting font sizes for better readability and visual appeal. The teacher's appreciation of the dual categorization, separating learning outcomes from specific projects, highlighted its effectiveness in catering to diverse viewers.
              In summary, the user testing was valuable in affirming the portfolio's thematic and structural strengths while also identifying opportunities for refinement in visual balance and content depth. This feedback will be instrumental in further enhancing the portfolio's appeal and effectiveness.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Usability Testing 2</h2>
            </section>
            <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why?</h2>
          <p className={styles.sectionContent}>
          My portfolio was already fed-up with enough information and structure to do a final testing and adjust accordingly if needed. 
          </p>
        </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>How?</h2>
              <p className={styles.sectionContent}>
               I found another student from another semester that was willing to give a test of my portfolio website. We met online, on discord, where I had prepared questions and tasks for him
               to do in order to follow his flow and thinking so that I can get an insight if my portfolio is well-organized and user-friendly.
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Usability Testing Questions and Tasks - Dimitar Gunchev</h2>
              <p className={styles.sectionContent}>
                I first started with an introduction:
                You are going to see a website related to semester 6 personal assignment - A portfollio. 
                I will be asking you couple of questions and also tasks to help me understand if the workflow and the structure of the portfolio are well-percieved. 
                Before we I send you the link and begin the testing, could you please Introduce yourself?
              </p>
              <p className={styles.sectionContent}>
                Questions & Tasks:
              </p>
              <p className={styles.sectionContent}>
                What are your first impressions of the website?
              </p>
              <p className={styles.sectionContent}>
                Could you please try to navigate and find out what projects I have worked on?
              </p>
              <p className={styles.sectionContent}>
                Pick a project you want to learn more about.
              </p>
              <p className={styles.sectionContent}>
                Okay, now find any research that I have done for this project and open it. 
              </p>
              <p className={styles.sectionContent}>
                Was it easy to find? What do you think about the structure? 
              </p>
              <p className={styles.sectionContent}>
                Okay, could you try to go back? 
              </p>
              <p className={styles.sectionContent}>
                Lastly, now that you have seen some parts of the portfolio, what is your opinion? Could you give me any feedback or something you would have done differently or maybe a change?
              </p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Teacher testing summary & Conclusion</h2>
              <p className={styles.sectionContent}>
              First impressions : definitely my portfolio, heavenly feeling because of the clouds and the white colors, very clear menu, a logo(indeveleopment), a feeling of one pager, expecting work to be down(explaining animations) Structure of showcasing work is logical, grid with 4 different products(explaining the purpose, wireframe screen), explaining the bottom project screen, getting into explanations, getting feedback on it instead of project do phases or assignment, quickly caught up on testimonials, thinks its a good idea, asked about the fact 1 to see how different people understand it, some pictures felt loose(images of products/assignments), thinks red is better than bold to specify its important, font is heavy, the balance is a bit off, size-wise as well has to be balanced, clouds were liked(keeping the thematic everywhere), liked the fact the portfolio was presented in two different categories ( learning outcome wise and project specific), the distingion is important.
              </p>
              <p className={styles.sectionContent}>
                Conclusion:
              </p>
              <p className={styles.sectionContent}>
              The user testing session with the teacher provided crucial feedback on the Figma portfolio prototype. 
              The portfolios heavenly theme with clouds and white color scheme made a strong, positive first impression, and its clear, logical structure for showcasing work was well-received. 
              However, areas for improvement were identified, including the need for better visual balance in font weight and color usage, and a suggestion to focus more on project phases or assignments. 
              The dual categorization of the portfolio, emphasizing both learning outcomes and specific projects, was particularly praised. 
              Overall, this session offered valuable insights for refining the portfolio's design and content presentation.
              </p>
            </section>
          </main>
        </div>
      );
    };

export default UserTesting;
