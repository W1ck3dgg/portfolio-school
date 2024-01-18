import React from 'react';
import Navbar from '../components/Navbar';
import ImageSection from '../components/ImageSection';
import styles from '../components/Group-project.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GroupProject = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/this-semester');
  };

  const textStyle = {
    color: 'white',
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
      <ImageSection imagePath="/gpbanner.png" text="GROUP PROJECT" onBackButtonClick={handleBackButtonClick} textStyle={textStyle}/>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
          DataDash group is our group name, we are a media design team that consist of five Fontys University students. 
          We worked with the Fontys research group Lectoraat where we are requested to visualise a tool for the journalists that work on news for the Gilze en Rijen.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Problem</h2>
          <p className={styles.sectionContent}>
          Journalists in Gilze en Rijen convene weekly to collaborate on news articles. Presently, the journalists are obliged to write the important points from these meetings manually. 
          This is an issue as it consumes a significant amount of the journalists time, time that could have been better spent on conducting research or engaging in discussing various topics. 
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Goal</h2>
          <p className={styles.sectionContent}>
          The goal of the project is to help journalists find the digital tools designed for them and use them in the most efficient way. 
          With this project we are aiming to design a tool that helps journalists who are less tech-savy use tools designed by software students at Fontys in the correct order.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expected result</h2>
          <p className={styles.sectionContent}>
          A high-fidelity prototype that visualises various types of data that allows the journalists to create news stories, focussing on the video AI aspect. 
          As well, documents and designs that can be used as an advice or a reference for the future workers in this project.  
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Questions</h2>
          <p className={styles.sectionContent}>
            <strong>Main Question:</strong>
          </p>
          <p className={styles.sectionContent}>
           How can we design a user-friendly platform, for the Gilze en Rijen journalists, which ensures the correct sequence of usage and prompts the appropriate tool selection?
          </p>
          <p className={styles.sectionContent}>
            <strong>Sub questions:</strong>
          </p>
          <p className={styles.sectionContent}>
            1. How do the Gilze & Rijen journalist work and what tools do they need? 
          </p>
          <p className={styles.sectionContent}>
            2. How to ensure a correct sequence of tool usage for the Gilze & Rijen journalists? 
          </p>
          <p className={styles.sectionContent}>
            3. How can we design a user-friendly platform that visualises the extracted data from, for example the city hall meetings? 
          </p>
          <p className={styles.sectionContent}>
            4. How can we guarantee that our platform is useful and accessible for journalists? 
          </p>
        </section>
        <section className={styles.sectionB}>
        <h2 className={styles.sectionTitle} style={{ color: 'rgb(180, 3, 10)' }}>Sprint 1</h2>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Poster</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
          During the first weeks of the semester, or after the first portfolio deliverable, our group project activies began. We first wrote down what we think data journalism is
          and we wrote down various topics on the whiteboard, where everyone picked a topic they found interesting.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
            After everyone picked a topic they find interesting we each began desk researching and also creating a poster that was later taped on the windows in class.
            My poster and topic is about how Journalist gather their data.
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <div className={styles.imageRow}>
            <img src="/ResearchPoster.png" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Poster Literature Research</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
          Understanding how journalists gather their data is valuable to our project as it might help us in our product creation. It helped me understand the process, the hardships and sometimes the 
          risks of being a journalist.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
          I used ChatGTP and Google Search to gather trust-worthy information sources that would help me with finding more about journalists data gathering activities. 
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
          Data journalism relies on a range of methods for data gathering, from public sources to social media, surveys, FOIA requests, data partnerships, crowdsourcing, leaks, and purchased data. These methods, along with ethical considerations, play a crucial role in shaping impactful data-driven reporting. 
          As data journalism continues to evolve, adaptability and ethical practice remain key to its success. Full document:
          </p>
          <p className={styles.sectionContent}><Link legacyBehavior href="/Journalist Data Gathering.pdf" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer">Literature Study</a></Link></p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Brainstorming & Card Sorting</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
          Brainstorming allowed us to collaboratively create interview questions about the journalist platform we were going to create, while card sorting helped us organize all the content we got.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           We voted and selectd a specific set of questions that we would ask during the first stakeholder meeting. Our stakeholders helped us by connecting us to a chief editor for de Baronie. We made use
           of the brainstormed questions and had prepared questions that we wanted to ask.
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <div className={styles.imageRow}>
          <img src="/Brainstorming.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expert Interview</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
          Interviewing an expert always gives a whole different perspective of what non-experts see of a finished product. Providing us with requirements and inquiries for an end-product
          definitely can give an insight and goals to work towards.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           We, as a team had prepared a set of questions to ask chief editor of de Baronie Tom Hayens: 
          </p>
          <p className={styles.sectionContent}>
            1. Could you please explain your daily job and steps you take for each project?  Process wise
          </p>
          <p className={styles.sectionContent}>
            2. What are the AI tools that you are currently using? And what about the data visualisation? Knowledge wise 
          </p>
          <p className={styles.sectionContent}>
            3. What specific requirements do you have for visualizing data in your journalistic storytelling? Requirements wise 
          </p>
          <p className={styles.sectionContent}>
            4. Who is going to use the product? Target 
          </p>
          <p className={styles.sectionContent}>
            5. Do you want the tool to be connected to the “Gilze-Rijen” website? Or will it be used for another websites? Design wise 
          </p>
          <p className={styles.sectionContent}>
            6. How do you visualise the tool to look like? Design wise 
          </p>
          <p className={styles.sectionContent}>
            7. What kind of stories would you like to create within the tool? Knowledge wise 
          </p>
          <p className={styles.sectionContent}>
            8. What criteria do you consider when determining the newsworthiness of an event for your articles? Knowledge wise  
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
          Journalists usually work from 9 AM to 5 PM, and Tom is responsible for topic selection.  
          The stories are mainly from the municipality meetings, unless there is something really like a hot topic. 
          They are not really using AI tools, but if they get to use any its for any simple tasks. 
          They are used to their current system and wouldnt want to do any big changes. 
          From the video there is a snapshot of the system they are currently using, so implementing a similar layout would benefit in way of not confusing the current users.
          </p>
          <div className={styles.videoContainer}>
           <iframe
            width="900"
            height="576"
            src="https://www.youtube.com/embed/59WVBeC74IQ?si=qdqNBwsw_Hm30ODM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
           </iframe>
          </div>
          <div className={styles.imageRow}>
            <img src="/platform.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>User Stories</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
          Having user Stories and Requirements lists ensures we are on the same page, dividing work and working towards the common goals.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           Everyone from the team created their own set of requirements list and stories and at the end we combined them into one big document. We used
           the help of chatGPT to explore more requirements and user stories in order to see more perspectives and to add to our list. 
           My requirements list that later ended up in the final list.
          </p>
          <p className={styles.sectionContent}>
            1. As a user I want to be able to translate the meeting at gilze en rijen municipality using the AI tool. 
          </p>
          <p className={styles.sectionContent}>
            2. As a user I  want to be able to generate relevant images for the discussed topics at the gilze en rijen municipality. 
          </p>
          <p className={styles.sectionContent}>
            3. As a user I want to be able to use the AI tool to save pieces of audio as quoting for the article I am writing. 
          </p>
          <p className={styles.sectionContent}>
            4. As a user I want to be able to see a list of the discussed topics at the gilze en rijen municipality, with images, summary and audio quoting. 
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
            The full list can be found in this pdf file:
          </p>
          <p className={styles.sectionContent}><Link legacyBehavior href="/Alle User Requirements.pdf" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer">User stories & User requirements</a></Link></p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>MoSCoW Table</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
            To narrow than and set priority on functionalities on our end-product. Ensuring we manage our time for high priority features and set secondary features, if there is enough time, and also 
            what will not be implemented.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           We sat together and created this MoSCow table, agreeing on requirements lits of functionalities and then present the table to the stakeholders.
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
          Data journalism relies on a range of methods for data gathering, from public sources to social media, surveys, FOIA requests, data partnerships, crowdsourcing, leaks, and purchased data. These methods, along with ethical considerations, play a crucial role in shaping impactful data-driven reporting. 
          As data journalism continues to evolve, adaptability and ethical practice remain key to its success. Full document:
          </p>
          <div className={styles.imageRow}>
            <img src="/mtable.png" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.sectionB}>
        <h2 className={styles.sectionTitle} style={{ color: 'rgb(180, 3, 10)' }}>Sprint 2</h2>
        </section>
      </main>
    </div>
  );
};

export default GroupProject;
