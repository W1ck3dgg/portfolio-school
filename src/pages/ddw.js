import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Structure-research.module.css'

const DDW = () => {
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
        imagePath="/ddwb.png"
        text="Dutch Design Week"
        onBackButtonClick={handleBackButtonClick}
        textStyle={textStyle}
      />

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
          The Dutch Design Week is an anual event in Eindhoven during the last days of October. This week is all about the design of the future and the future of design. 
          This year, Fontys had a colaboration with Canadian College from Toronto where many students came in The Netherlands to attend the DDW.
          Fontys organized free accesss to the event for all students. We were all divided in groups, where the 9 students from Toronto were split among the class groups.
          In my group there were two girls Ashley and Emily, together with Mazoung and Kim from the class. 
          We explored most of the locations in Eindhoven, mainly the Strijp Area, the Mall Design Expo and some parts of the Center.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Day 1</h2>
          <p className={styles.sectionContent}>
          We, the students from Group 3, started our day at Fontys TQ, where we got to know each other. After chatting and becoming friends, we decided on our theme: product and craft design. Excited, we headed to the official info points labeled A2, A3, A4, A5, and A6.

          At A2, we found cool things like salad glass spoons and 3D printed items. We even saw switch buttons for lights made with a 3D printer. It got us talking about how technology and design can mix in interesting ways.

          Then, we went to Area 51 (C5/6/7) and saw some art, although it wasnt exactly what we were looking for. But it was fun, and we got to try some Dutch pancakes called poffertjes, which were delicious.

          After our snack break, we went to the Klokgebouw building (C1). In the first room, we learned about disappearing forests and how its a big problem. It made us think about nature and the environment.

          In the second room, we found out how the internet works. It was kind of like learning how the roads on the internet connect websites, making it easier to understand.

          The third room had lots of art, and we saw many creative designs. It was colorful and interesting, even though it wasnt directly related to our theme.

          Finally, in the fourth room, we saw designs that matched our theme perfectly. There were cool bikes, easy-to-use boilers, and even a button that played a poem and a video. We also saw living creatures storing data, which was amazing and made us think about technology in a whole new way.

          At the end of the day, we left feeling happy and inspired. We made new friends, learned a lot, and saw so many creative ideas. It was a great start to Dutch Design Week!
          </p>
          <div className={styles.imageRow}>
            <img src="/gp1.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/gp2.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Day 2</h2>
          <p className={styles.sectionContent}>
          On day two of our Dutch Design Week adventures, we met up as a group at the Piazza in the centre of Eindhoven. 
          From here, we wanted to explore more of the centralized exhibits that Eindhoven had to offer. 
          We began at the Heuvel Eindhoven to see the grad show displays that took up various studio spaces. 
          The artwork ranged from tangible clay pottery to abstract technology displays and as we moved upstairs to see more, there was a whole section dedicated to ideas that help improve our lives in various ways 
          from pollution to healthcare to social relationships. Often, the displays were interactive and used VR or AI to help express their themes or goals. 
          This was interesting to play with and allowed to immerse ourselves within and better understand the artists vision. 
          We always made a point to break for lunch all together in order to have an opportunity to socialize with our international peers. 
          It was interesting to merge the inspiration of the physical Dutch Design Week design with the social inspiration of Dutch Design Week.
          </p>
          <div className={styles.imageRow}>
            <img src="/gp3.jpg" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Assignment</h2>
      <p className={styles.sectionContent}>
        After two days of exploring, we sat together and thought of what we want to do for the assignment. We were thinking of our happy memories together and
        we decided to create something with poffertjes as it was our first, memorable and most fun moment together. We began brainstorming and came up with the idea
        of creating a design for innovative poffertjes plate with fork holder, and a spot for toppings.
      </p>
      <div className={styles.imageRow}>
        <img src="/poffertjes.png" alt="Poffertjes" className={styles.sectionImage} />
      </div>
      <div className={styles.imageRow}>
        <img src="/poffertjes1.png" alt="Poffertjes 1" className={styles.sectionImage} />
      </div>
      <div className={styles.videoContainer}>
        <iframe
          width="900"
          height="576"
          src="https://www.youtube.com/embed/XM0SYAWyKoQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reflection</h2>
          <p className={styles.sectionContent}>
          Definitely a cool experience, I believe the guests from Toronto really enjoyed their stay in The Netherlands, we laughed and cheered every moment together 
          and I believe we created a bond while exploring and creating. 
          Plans for Canada trip are already done!
          </p>
        </section>
      </main>
    </div>
  );
};

export default DDW;