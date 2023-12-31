import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Learning-outcomes.module.css';

const learningOutcomesList = [
  {
    title: "User interaction (analysis & advice)",
    description: "You analyze the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design.",
    items: [
      { name: "Item one", url: "/target-audience" },
      { name: "Item Two", url: "/target-audience" },
      { name: "Item Three", url: "/target-audience" },
    ],
  },
  {
    title: "User interaction (execution & validation)",
    description: "You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders.",
    items: [
      { name: "Item one", url: "/target-audience" },
      { name: "Item Two", url: "/target-audience" },
      { name: "Item Three", url: "/target-audience" },
    ],
  },
  {
    title: "Software design and realisation",
    description: "You create & design software with existing components or libraries using predetermined quality criteria and version control.",
    items: [
      { name: "Item one", url: "/target-audience" },
      { name: "Item Two", url: "/target-audience" },
      { name: "Item Three", url: "/target-audience" },
    ],
  },
  {
    title: "Future-oriented organisation",
    description: "You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan. ",
    items: [
      { name: "Item one", url: "/target-audience" },
      { name: "Item Two", url: "/target-audience" },
      { name: "Item Three", url: "/target-audience" },
    ],
  },
  {
    title: "Investigative problem solving",
    description: "You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices.",
    items: [
      { name: "Item one", url: "/target-audience" },
      { name: "Item Two", url: "/target-audience" },
      { name: "Item Three", url: "/target-audience" },
    ],
  },
  {
    title: "Personal leadership",
    description: "You methodically reflect on your professional identity and personal development.",
    items: [
      { name: "Item one", url: "/target-audience" },
      { name: "Item Two", url: "/target-audience" },
      { name: "Item Three", url: "/target-audience" },
    ],
  },
  {
    title: "Goal-oriented interaction",
    description: "You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context.",
    items: [
      { name: "Item one", url: "/target-audience" },
      { name: "Item Two", url: "/target-audience" },
      { name: "Item Three", url: "/target-audience" },
    ],
  },
];

export default function LearningOutcomes() {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/this-semester');
  };

  return (
    <div>
      <Navbar />
      <ImageSection 
          imagePath="/learning-outcomes.png" 
          text="LEARNING OUTCOMES" 
          onBackButtonClick={handleBackButtonClick}
      />
      <div className={styles.learningOutcomesContainer}>
        {learningOutcomesList.map((outcome, index) => (
          <section key={index} className={styles.learningOutcome}>
            <h2 className={styles.learningOutcomeTitle}>
              Learning outcome {index + 1}: <span>{outcome.title}</span>
            </h2>
            <p className={styles.learningOutcomeDescription}>{outcome.description}</p>
            <ul className={styles.learningOutcomeList}>
              {outcome.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                <Link legacyBehavior href={item.url}>
                  <a target='_blank' className={styles.learningOutcomeListItemLink}>{item.name}</a>
                </Link>
              </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className={styles.checkProjectsSection}>
        <h2 className={styles.checkProjectsTitle}>CHECK MY PROJECTS</h2>
        <button className={styles.toProjectsButton} onClick={handleBackButtonClick}>
          To projects
        </button>
      </div>
    </div>
  );
}