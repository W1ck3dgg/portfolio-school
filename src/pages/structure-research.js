import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Structure-research.module.css'

const StructureResearch = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/portfolio-project');
  };

  const textStyle = {
    color: 'black',
  };

  return (
    <div>
      <Navbar />
      <ImageSection
        imagePath="/structure.png"
        text="HOW TO STRUCTURE & DESIGN A PORTFOLIO"
        onBackButtonClick={handleBackButtonClick}
        textStyle={textStyle}
      />

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
          After I was ready to research the framework it was time to research the structure of a portfolio, what should be included, 
          how I can design and also see how professional portfolios look like, to get a better idea and inspiration.
          </p>
          {/* <div className={styles.imageRow}>
            <img src="/change.png" alt="Image 1" className={styles.sectionImage} />
            <img src="/change.png" alt="Image 2" className={styles.sectionImage} />
          </div> */}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Methods</h2>
          <p className={styles.sectionContent}>
            For this research I made use of the following Methods - Literature Study and Requirements List and The Good, best and bad practices.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Requirements List</h2>
          <p className={styles.sectionContent}>
            In order to properly select a framework, I had specific needs that the framework would need to meet.
          </p>
          <p className={styles.sectionContent}>
            1. Easy to look at
          </p>
          <p className={styles.sectionContent}>
            2. Easy to follow and navigate
          </p>
          <p className={styles.sectionContent}>
            3. Nicely selected colors
          </p>
          <p className={styles.sectionContent}>
            4.  A way to represent myself, my work and a piece of my personality
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Structure and must-have items</h2>
          <p className={styles.sectionContent}>
            <strong>Homepage:</strong>
          </p>
          <p className={styles.sectionContent}>
            • A clear introduction.
          </p>
          <p className={styles.sectionContent}>
            • A visually appealing hero section with my name and avisual.
          </p>
          <p className={styles.sectionContent}>
            • Good quality logo.
          </p>
          <p className={styles.sectionContent}>
            • A call-to-action (CTA) button.
          </p>
          <p className={styles.sectionContent}>
            It is very important to have a good looking landing page as
            this is the first impression the user gets when they enter the
            website, so a strong impression is a must. Having personal
            photo is good to have to let people know who they are
            potentially going to work with. CTA is a key button as it
            serves to guide the user to a specific action, for example
            checking out past projects and work or perhaps an About me
            page.
          </p>
          <p className={styles.sectionContent}>
            <strong>About Page:</strong>
          </p>
          <p className={styles.sectionContent}>
            • Short introduction and or facts.
          </p>
          <p className={styles.sectionContent}>
            • Information about achievements, background,
            experiences.
          </p>
          <p className={styles.sectionContent}>
            • Personal goals.
          </p>
          <p className={styles.sectionContent}>
            • Personal trait that will leave some kind of impression on
            the user about myself.
          </p>
          <p className={styles.sectionContent}>
            The About me page is an essential part of a portfolio, usually
            there I will put facts about me, goals, testimonials, past
            experiences and try to showcase a bit of my personality that
            can be done by using images, songs and personal photos.
          </p>
          <p className={styles.sectionContent}>
            <strong>Expertise/My work Page:</strong>
          </p>
          <p className={styles.sectionContent}>
            • An overview of my past work.
          </p>
          <p className={styles.sectionContent}>
            • An overview of ongoing projects.
          </p>
          <p className={styles.sectionContent}>
            • An overview of my skills.
          </p>
          <p className={styles.sectionContent}>
            Usually this is what most users will mostly care about, the
            skill level and my work. On this page it is important to
            showcase my work in a collected and representative way so
            that there wont be any confusions when browsing through
            my work.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Colors</h2>
          <p className={styles.sectionContent}>
            From my previous semester (Internship), I was given a book that has really helpful information about colors, its from Refactoring UI, and it proved wonders during my internship, so I am once again going to make use of it for this.
            I have chosen a palette comprising <span style={{ color: 'rgb(180, 3, 10)' }}>Darker red</span>, a subtle shade of <span style={{ color: '#1b1b1b' }}>black</span> (#1b1b1b), and white to create a visually compelling and professional look.
            The <span style={{ color: 'rgb(180, 3, 10)' }}>Darker red</span> adds a touch of warmth and energy, reflecting creativity and passion.
            The <span style={{ color: '#1b1b1b' }}>#1b1b1b</span>, which is a nuanced black, offers a sleek and modern backdrop that isnt the same as pure black, giving the design a more refined and approachable feel.
            This color is complemented by white, which provides a clear contrast for enhanced readability and a clean, minimalist aesthetic.
            Together, these colors blend warmth with sophistication, highlighting my design sensibilities and ensuring that the content stands out effectively.
          </p>
          <div className={styles.imageRow}>
            <img src="/colors.png" alt="Image 1" className={styles.sectionImage} />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Animations</h2>
          <p className={styles.sectionContent}>
            Integrating animations into a portfolio website can enhance its
            visual appeal and engagement, but it can also do the oposite
            and cause performance issues if exaggerated.
          </p>
          <p className={styles.sectionContent}>
            <strong>Pros of having animations in a portfolio:</strong>
          </p>
          <p className={styles.sectionContent}>
            • Visualy Appealing
          </p>
          <p className={styles.sectionContent}>
            • Improved User Experience
          </p>
          <p className={styles.sectionContent}>
            • Storytelling
          </p>
          <p className={styles.sectionContent}>
            • Interactive
          </p>
          <p className={styles.sectionContent}>
            • Highlighting Key Information
          </p>
          <p className={styles.sectionContent}>
            <strong>Cons of having animations in a portfolio:</strong>
          </p>
          <p className={styles.sectionContent}>
            • Maintenance
          </p>
          <p className={styles.sectionContent}>
            • Accessibility
          </p>
          <p className={styles.sectionContent}>
            • Compatibility
          </p>
          <p className={styles.sectionContent}>
            • Performance Issues
          </p>
          <p className={styles.sectionContent}>
            Including animations in a portfolio can significantly boost the
            appeal and the engagement of the website, but it can also
            cause performance issues, accessibility issues if not being
            mindful or exaggerated with lots of animations or if they do
            not match the goal of the portfolio.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why invent the wheel again?</h2>
          <p className={styles.sectionContent}>
            Using the best, good, and bad practices methods, I looked into several portfolio pages for inspiration and to see how others do it. Some of my favourite examples:
          </p>
          <div className={styles.imageRow}>
            <img src="/introexampe.png" alt="Image 1" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/aboutexample.png" alt="Image 2" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/callexample.png" alt="Image 2" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/callexample2.png" alt="Image 2" className={styles.sectionImage} />
          </div>
          <div className={styles.imageRow}>
            <img src="/workexample.png" alt="Image 2" className={styles.sectionImage} />
          </div>
          <p className={styles.sectionContent}>
            The conclusion of this practice is that my research was mostly accurate. I saw a lot of elements, stylings and even colorations in those websites that I visited, that helped me
            choose the shape of my portfolio. I am definitely going to include a call-to-action button that will guide the user to the next step, when they enter my portfolio. I really liked the idea
            of putting projects together in a row, like a showcase. I saw different examples of about me pages, but what they all had in common is a personal picture, I believe if I would try to sell
            my skills and products, I would also include a photo, or two to show people what kind of person they would eventually work with.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conclusion and result</h2>
          <p className={styles.sectionContent}>
            After diving into the research, I decided on a framework that struck the perfect balance between looks and functionality. I went with a color palette thats both professional and inviting, mixing a warm, darker red with a soft black and crisp white.
            This choice wasnt just about looks it was about making sure my content popped and caught the eye.
            When it came to structuring the site, I focused on creating spaces that would showcase who I am and what I can do.
            The homepage had to make a strong first impression, while the About and Work pages were all about giving a deeper insight into my skills and experiences.
            I thought about adding animations to make things flahier and cooler, but I didnt want to overdo it or make them confusing, also a matter of time to experiment with. To me it was important to keep the site smooth and accessible.
            The real game-changer was looking at other portfolios for inspiration. I noticed how personal touches, like photos, really made a difference in making a portfolio feel more human and relatable.
            In the end, every piece of research and every decision I made along the way was about creating a portfolio that wasnt just a collection of work, but a reflection of my journey and style.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>References</h2>
          <p className={styles.sectionContent}>
          www.youtube.com. (n.d.). GOOD Vs BAD Design Portfolios (With Examples). [online] Available at: https://www.youtube.com/watch?v=0VGc7jrD9zo [Accessed Oct. 2023].
          </p>
          <p className={styles.sectionContent}>
          Spivak, E. (2023). How To Make a Portfolio in 10 Steps. [online] Wix Blog. Available at: https://www.wix.com/blog/how-to-make-online-design-portfolio-guide?utm_source=google&utm_medium=cpc&utm_campaign=16501254681%5e134604029936&experiment_id=%5e%5e586430767399%5e%5e_DSA [Accessed Oct. 2023].
            </p>
            <p className={styles.sectionContent}>
            Webflow. (n.d.). 8 things to consider when building your portfolio website | Webflow Blog. [online] Available at: https://webflow.com/blog/8-things-to-consider-when-building-your-portfolio-website?utm_source=google&utm_medium=search&utm_campaign=SS-GoogleSearch-Nonbrand-DynamicSearchAds-Global&utm_term=aud-519773332254:dsa-1480385100845___617245336972__ [Accessed Oct. 2023].‌
            </p>
            <p className={styles.sectionContent}>
            Brealey, J. (2017). 10 tips for building a killer portfolio website. [online] Creative Bloq. Available at: https://www.creativebloq.com/portfolios/tips-portfolio-website-4137460.
            </p>
            <p className={styles.sectionContent}>
            Webflow. (n.d.). 10 stunning web portfolio examples | Webflow Blog. [online] Available at: https://webflow.com/blog/web-design-portfolios?utm_source=google&utm_medium=search&utm_campaign=SS-GoogleSearch-Nonbrand-DynamicSearchAds-Global&utm_term=aud-584036164525:dsa-1729073412468___617245336975__ [Accessed Oct. 2023].
            </p>
        </section>
      </main>
    </div>
  );
};

export default StructureResearch;