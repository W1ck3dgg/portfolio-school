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
          <img src="/brainstorming.png" alt="Image 1" className={styles.sectionImageB} />
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
          <div className={styles.imageRow}>
            <img src="/mtable.png" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sprint Delivery 1</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
            To clarify stakeholder needs and update on progress.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           We organized a meeting with our stakeholders - Pim Williems and Berry Sanders. During the organized timeslot we discussed what we have been doing up until then, we showed and discussed our research and also the Moscow table.
           We also talked about the plans and goals for the second sprint delivery. I was responsible for creating the presentation, where two of my team members - Mazoun and Negin created simple wireframes to present during the meeting.
           Where Kim and Maik were responsible for asking the questions and also taking notes for the meeting.
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
           Our stakeholders really liked our progress, and liked the design of the video wireframe. However, they said that it was not enough to understand the flow and said there was a missing step before going to the video page.
           They adviced us to update the wireframes and create prototypes that could be tested with journalists.
          </p>
        </section> */}
        <section className={styles.sectionB}>
        <h2 className={styles.sectionTitle} style={{ color: 'rgb(180, 3, 10)' }}>Sprint 2</h2>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Persona</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
          Creating personas helps tailor products and services to user needs, guiding design and enhancing user experience.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
          A persona is created by researching and synthesizing user data into a fictional but realistic character that represents key traits of a target audience segment.
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <div className={styles.imageRow}>
            <img src="/persona.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interview</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
            Understaning the process of a journalist that goes to Gilze en Rijen municipality is crucial to our project. The prepared in advance questions were to help us understand their daily challenges, 
            workflow, what tools they use and how our product might be helpful for them.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           The person who we interviewed online is a journalist working for BN de Stem and goes to the Gilze en Rijen municipality meetings. Our questions consisted of:
          </p>
          <p className={styles.sectionContent}>
            1. What kind of topics are usually discussed in each week on the meeting? Are they different? 
          </p>
          <p className={styles.sectionContent}>
            2. Who goes to these meetings and what type of journalits are going to these meetings?
          </p>
          <p className={styles.sectionContent}>
            3. How do you include multimedia elements in your stories? 
          </p>
          <p className={styles.sectionContent}>
            4. How do you prioritize the tasks for creating a story from the meeting? 
          </p>
          <p className={styles.sectionContent}>
            5. What challenges do journalists face in their current workflow? 
          </p>
          <p className={styles.sectionContent}>
            6. What kind of AI tools do you use? And how do you choose them? 
          </p>
          <p className={styles.sectionContent}>
            7. Do you fact-check the meeting discussions? How do you fact-check them?
          </p>
          <p className={styles.sectionContent}>
            8. What steps do you take to create an article? 
          </p>
          <p className={styles.sectionContent}>
            9. How do you structure your articles? 
          </p>
          <p className={styles.sectionContent}>
            10. Do you need the trending news while creating the story? (if yes) Where in the progress? 
          </p>
          <p className={styles.sectionContent}>
            11. What device do you use during the meetings? (tablet, mobile, desktop...)
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
            The interview was really valuable for us as we learned many things. Starting from their responsibility
            to cover big range of topics that are connected to the city. For example : Tree plantings, air quality, housings and etc. 
            Sometimes he faces trouble to write an article if he is not familiar with the given topic, so an extra research is required from him.
            He is aware of the AI tools availability, but he only used basic text inquiries like spelling and formating. 
            He is interested in AI Tools and knows about ChatGPT and thinks Fact-checking might be important for researching purposes.
            For him its important to include how people feel and think in articles and to articles might change depending on their importance.
            This interview concluded the journalists daily struggles and also our end-product might prove useful for journalists like him.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>First Mock-ups</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
           Working on different pages of the project helped not only us, but also our stakeholders visualize our product in order to get feedback. We selected only the key elements of our 
           idea and used figma to create the first mock-ups.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           Because we had more than one Idea, we decided to divide into two versions that we later showed to the stakeholders for test, feedback and validation. 
           I worked on creating the workspace pages, where the editing would happen. Basicaly, I recreated an editor, but made it look a bit different, with the difference
           being the little pop menu on the right side where available AI tools would show for the specific editor section for example - Title, Main body(text), and an option to add more sections.
           I also designed a preview page that shows how the complete article woud look like.
           The third page I had was about the home screen of the workspace, where there would be published article history and activity within the platform.
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
            We showed the mockups couple of days after to the stakeholders when we also did a sprint delivery. We were advised to not make drastic changes to the design, but make sure 
            its user-friendly and stick to a similar design the journalists currently have, based on the interview with Tom Hayens. In addition, we were told to focus more on the user-flow and make sure
            not to create a separate program or tool, meaning to force the journalists to open another browser page or program and switch between. Lastly, we should create prototypes and do a testing on them.
          </p>
          <div className={styles.imageRow}>
            <img src="/mockups.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
        </section>
        <section className={styles.sectionB}>
        <h2 className={styles.sectionTitle} style={{ color: 'rgb(180, 3, 10)' }}>Sprint 3</h2>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Prototype Creation and Iterations</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
            Prototype is an essential part of our project. Its not only our end delivery, but also servers as a tool for our stakeholders to test and give feedback, which will contribute to
            the wished result - A tool for Gilze en Rijen Journalists
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           After the first mockups, we created 3 more iterations of the prototype, where I worked on different areas and pages of the prototype. Thanks to Kim for creating a design system(Google Material),
           we all followed the same style, shapes and buttons to ensure smooth and clean, straightforward flow.
           On the Second iteration, I designed and created the Landing page, where the user would first get when they enter the website.
          </p>
          <div className={styles.imageRow}>
            <img src="/wf3.png" alt="Image 1" className={styles.sectionImage} />
          </div>
          <p className={styles.sectionContent}>
           On the third iteration, the workspace got more attention due to feedback from stakeholders. I especially worked on the available workflows for example the user would have the option
           to either select to create a new article, or to create a social media post.
          </p>
          <div className={styles.imageRow}>
            <img src="/wf0.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
          <p className={styles.sectionContent}>
           Here the user can insert either a link, or a part of the video, a transcript, where later they will be asked to select a suggested topic based on the uploaded content.
          </p>
          <div className={styles.imageRow}>
            <img src="/wf1.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
          <p className={styles.sectionContent}>
           Here the user would get suggested title based on the inserted video or transcript. If the user doesnt like the suggested titles, they have the posibility to regenerate more titles.
          </p>
          <div className={styles.imageRow}>
            <img src="/wf2.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
          <p className={styles.sectionContent}>
           On the last iteration, I changed the look of the social media screens, and created permission-based screens. Because we learned from the last usability testing, that the journalists
           are not responsible for social media content, we decided to still keep the social media integration, but make permission based system, so I designed permission-based screens for Article writers and social media workers.
          </p>
          <div className={styles.imageRow}>
            <img src="/wf4.png" alt="Image 1" className={styles.sectionImageB} />
          </div>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
          In the beginning our main focus was the video transcription from the municipality of Gilze en Rijen, however we decided to extend our product and make the user able to upload a transcript or a video, select a topic and a title,
          and then make use of various AI tools to write an article.
          Link to our figma can be found on
          </p>
          <p className={styles.sectionContent}><Link legacyBehavior href="https://www.figma.com/file/f6lvw1UVxtUMA4fqSOYVNj/DataDash_Mockups?type=design&node-id=145-125&mode=design&t=YjNsVIcSL9CGXFtG-0" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer">Click</a></Link></p>
          <p className={styles.sectionContent}>
           Navigate for iterations on the left side of the page.
          </p>
          <div className={styles.imageRow}>
            <img src="/wf5.png" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Usability Testing</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
          The primary objective of this usability test is to assess the journalists willingness to use the AI tool selection and prompting app (Datadash), evaluate its user-friendliness, and determine if it effectively meets the specific needs of journalists during the process of creating and publishing an article. Additionally, we aim to gather insights into participants existing practices, preferred AI tools, and preferences for saving or sharing AI results.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           Ensuring everyone from the team has everything set up, like links, figma, teams and taking notes, we set up an online meeting with Fabian for usability testing.
           By providing a brief overview of the apps purpose and functionalities, emphasizing its potential, we prepared a set of tasks and afterwards questions.
           My role in this usability testing was to ensure there were no technical issues, like not working links, missing images or something that might delay or confuse our test user.
          </p>
          <p className={styles.sectionContent}>
           Tasks:
          </p>
          <p className={styles.sectionContent}>
            1. Please log in to your account and connect to workspace page.  
          </p>
          <p className={styles.sectionContent}>
            2. Please upload the example link and then choose any AI helps you need. (you can try multiple times) 
          </p>
          <p className={styles.sectionContent}>
            3. Explore and check the result, save the result.  
          </p>
          <p className={styles.sectionContent}>
            4. Share the results on you preferred social media. (AI will customize the content for different social media)
          </p>
          <p className={styles.sectionContent}>
            Questions after the test:
          </p>
          <p className={styles.sectionContent}>
            1. Do you think this application can help you and improve your workflow?
          </p>
          <p className={styles.sectionContent}>
            2. How easy was it to find the workspace?
          </p>
          <p className={styles.sectionContent}>
            3. Was there any particular task that you found challenging?  
          </p>
          <p className={styles.sectionContent}>
            4. How easy is it to use the AI tools with this app? 
          </p>
          <p className={styles.sectionContent}>
            5. Based on your experience, how likely are you to return and use the app regularly?   
          </p>
          <p className={styles.sectionContent}>
            6.  For what purposes would use this app? (For example, create and editing article? Writing assistance? Publishing on social media? etc.)  
          </p>
          <p className={styles.sectionContent}>
            7. Where do you usually publish your articles? (social media)  
          </p>
          <p className={styles.sectionContent}>
            8. How would you like to save results generated by AI, is you want to use them again? Pdf file? On application? 
          </p>
          <p className={styles.sectionContent}>
            9. On what device would prefer to use this app (mobile, desktop?)?   
          </p>
          <p className={styles.sectionContent}>
            10. Which of these AI tools do you find useful in your work? 
          </p>
          <p className={styles.sectionContent}>
            11. What do you think about your existing dashboard that you use in Bn De Stem? Is it easy to work with?  
          </p>
          <p className={styles.sectionContent}>
            12. Do you have any other feedback or thoughts? 
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
            Fabian didnt have any trouble connecting to the workspace, however he was confused if he was supposed to insert a link or not. He then expressed
            diffculties locating and choosing an AI tool from the provided options, and team members notices his hesitation while navigating the interface and 
            made note of this for further improvement. He was confused how to choose a title. Moving forward in the workspace Fabian tried to use an AI tool for content creation
            but then he faced some confusion again regarding the tool specific functionalities and how they integrated into his workflow.
            He sought clarification on whether these tools could be utilized effectively for the article creation within their journalistic platform.
            However, he was interested in the posibilites of the AI tools and could give them a try in an existing workflow.
            When testing the social media creation, he found them useful, but not relevant to his responsibilities so he couldnt give us relevant feedback on this.
          </p>
          <p className={styles.sectionContent}>
            Fabian thinks workflow improvements can be done, particularly in image handling and topic generation, useful, but didnt need the social media posting feature. 
            He navigated the workspace easily without any testing challenges and found the AI tools straightforward, with a preference for the video summarization tool. 
            The app was seen as beneficial for editing, summaries, and generating article ideas, with AI results being saved within the app for convenience. 
            He primarily works on a laptop, occasionally using a phone, and liked the blue and yellow color scheme, emphasizing simplicity in design. 
            Overall, they appreciated the apps simplicity after he experienced the whole app and thinks it can fit into his existing workflow.
          </p>
        </section>
        <section className={styles.sectionB}>
        <h2 className={styles.sectionTitle} style={{ color: 'rgb(180, 3, 10)' }}>Sprint 4</h2>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Coding</h2>
          <p className={styles.sectionContent}>
            <strong>Why?</strong>
          </p>
          <p className={styles.sectionContent}>
            Even though our stakeholders didnt require from us to code, as there is a software students working on the same project with us
            as a team we decided to code different functionalities that will represent our tool during the Inovation Insight day, and also to meet the semesters learning outcomes.
          </p>
          <p className={styles.sectionContent}>
            <strong>How?</strong>
          </p>
          <p className={styles.sectionContent}>
           We sat together and everyone wished to code something different, so in total we have four working functionalities of our end-product. I used react and an API that I found online, it paraphrases any given text that is put in the prompt, representing the
           AI Paraphrasing tool in our product.
          </p>
          <p className={styles.sectionContent}>
            <strong>Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
           Link for Git repository: <Link legacyBehavior href="https://github.com/W1ck3dgg/Group3" passHref><a style={linkStyle} target="_blank" rel="noopener noreferrer">Git Hub</a></Link>
          </p>
          <p className={styles.sectionContent}>
           Video:
          </p>
          <div className={styles.videoContainer}>
           <iframe
            width="900"
            height="576"
            src="https://www.youtube.com/embed/gnGo4AKUNjk?si=gm53jJG8G_i4lSlJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
           </iframe>
          </div>
        </section>
        <section className={styles.sectionB}>
        <h2 className={styles.sectionTitle} style={{ color: 'rgb(180, 3, 10)' }}>End of project - Conclusion, Reflection and Retrospect</h2>
        </section>
        <p className={styles.sectionContent}>
            <strong>Project Conclusion</strong>
          </p>
          <p className={styles.sectionContent}>
          Our group took on various activities to create user-friendly tool for journalists in Gilze en Rijen. The project adressed the problem of journalists spending excessive time manually writing down key points from municipality meetings in order to create an article.
          Through various sprints, we engaged in activities like research poster creation, literature study, expert interviews, and brainstorming sessions. These efforts were crucial in understanding the journalists' data gathering processes, their daily workflow, and the tools they currently use. Our research revealed the necessity for a platform that is easily navigable and meets journalists' specific needs without drastically changing their current systems.
          Our development process included creating personas, user stories, and mock-ups to visualize our product, ensuring it aligns with the journalists' requirements. We focused on user-friendly design, adhering to feedback from stakeholders and ensuring the tool integrated seamlessly into the journalists' existing workflow.
          Prototype creation and iterations allowed us to refine the tool, with usability testing providing valuable insights. Feedback from journalists like Fabian helped us understand the practicality of our tool in their daily work and guided us to make necessary improvements.
          The project culminated in coding various functionalities to represent our tool, utilizing technologies like React and external APIs.
          Overall, the project was a success in designing a tool that enhances journalists' efficiency and workflow, marking a significant contribution to the field of data journalism and media design.
          </p>
          <p className={styles.sectionContent}>
            <strong>Reflection</strong>
          </p>
          <p className={styles.sectionContent}>
          Working on a project has always been one of the best parts in each semester. 
          With each year I can see my personal growth as a team member, and with the help of this year team I definitely honed many of my skills like communication, time-management, self-leadership, coding, and designing. 
          I believe all of us worked hard towards the same goal with equal passion  and I am happy I got to meet people with different methods of working and different aspect of doing work.
          </p>
          <p className={styles.sectionContent}>
            <strong>Retrospect</strong>
          </p>
          <p className={styles.sectionContent}>
          In the beginning I was a bit quiet, maybe because Its part of my personality and I dont really like to talk a lot if I dont know the people I am with for a longer period of time. 
          In the end I opened myself and I think I was able to deliver valuable efforts to my team members. 
          In my future projects I would like to try and be more open, I have always wanted to try and lead a team to success, because I believe I have what it takes. 
          Moreover, I think I would try to invlove teachers more into what is happening within the team and the project. 
          Unfortunately, our team started with less people than the rest of the groups and after some time we lost another member, which made me feel a bit more stressed and demoralizing. 
          If this ever happens again to me or someone else I would try to not look at the bad side of the situation, but make sure I give more from me to boost the morale of the team as well.
          </p>
      </main>
    </div>
  );
};

export default GroupProject;
