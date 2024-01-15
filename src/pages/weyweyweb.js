import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Structure-research.module.css'

const WWW = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/this-semester');
  };

  const textStyle = {
    color: 'black',
  };

  return (
    <div>
      <Navbar />
      <ImageSection
        imagePath="/www.png"
        onBackButtonClick={handleBackButtonClick}
        textStyle={textStyle}
      />

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
            Wey Wey Web is an anual event that happens in Malaga, Spain. It is organized by Yay-Yay events with the support of Yes We Tech.
            The event was 2 days, where you could see the latest trends regards to Web Technologies.
            There were a lot of workshops and lots of different speakers during those two days.
            Topics: Web programming, JS Frameworks, Web design UX/UI, Product design, Mobile development, Software architectures and best practices, and Web Accessibility.
            The event was on 23rd and 24th of November.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Day 0</h2>
          <p className={styles.sectionContent}>
            We arrived at Malaga, Spain on 22nd of November, after the long trip me, Todor and Saditim headed to the place we were going to stay for the event. On this day, we took the chance
            to explore the city a little at night and found a place to eat and chat. The city, the people were really beautiful.
          </p>
          <div className={styles.imageRow}>
            <img src="/us1.png" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Day 1</h2>
          <p className={styles.sectionContent}>
          On the first day of the event, we woke up early and headed to the conferention hall, it was around an hour walk from the place we where staying. When we got there, we registered and got
          our badges, bags and tshirts. First impressions of the event was that it was well-organized and it was easy to find where to go and whatever we were looking for. On this day we visited only three of the workshops - Adaptive Designs, ChatGPT & AI, and Discover the power of a headless CMS.
          After that we headed out for some food and went home to rest. At night we went out and met other people from our class to have a drink and fun chats.
          </p>
          <div className={styles.imageRow}>
            <img src="/m1.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/m11.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Day 2</h2>
      <p className={styles.sectionContent}>
        On day two we only got to one of the workshops called 3D in the web, how had can it be? We met a few students from the class and had a chat, after that the three of us left and 
        explored the city and enjoyed the nice sunny weather.
      </p>
      <div className={styles.imageRow}>
            <img src="/m2.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/us2.png" alt="Image 1" className={styles.sectionImage} />
          </div>
    </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reflection</h2>
          <p className={styles.sectionContent}>
          Cant express how much I enjoyed the opportunity to go to Malaga and this event, to learn more about what I like and would love to do for a living - Designing and creating.
          Together with the nice city and weather I couldnt have asked for more. Definitely, happy I was able to go there and experience all of this and I am grateful to Fontys for organizing this for the students.
          </p>
        </section>
      </main>
    </div>
  );
};

export default WWW;