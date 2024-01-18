import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ImageSection from '@/components/ImageSection';
import styles from '../components/Code-choice.module.css'

const CodeChoice = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/portfolio-project');
  };

  const textStyle = {
    color: 'white',
  };

  return (
    <div>
      <Navbar />
      <ImageSection
        imagePath="/framework.png"
        text="FRAMEWORK RESEARCH"
        onBackButtonClick={handleBackButtonClick}
        textStyle={textStyle}
      />

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionContent}>
            The purpose of this research is to help me select the framework for the portfolio project. Taking into an account that I used to work with Next.js during my Semester 5 Internship, I wanted to once again use the same framework and get my coding skills with this framework on a better level.
            However, I did research possible frameworks I could do this project on and what possibilities other frameworks had, when and how are being used. The reason of this study was to get to know if Next.js is indeed a good choice for the portfolio project.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Methods</h2>
          <p className={styles.sectionContent}>
            For this research I made use of the following Methods - Literature Study and Requirements List.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Requirements List</h2>
          <p className={styles.sectionContent}>
            In order to properly select a framework, I had specific needs that the framework would need to meet.
          </p>
          <p className={styles.sectionContent}>
            1. Ease of use: It is important to me to be well documented, have some examples and to be easy to start/install.
          </p>
          <p className={styles.sectionContent}>
            2. Performance: Of course performance is always a preffered quality when it comes to creating any kind of projects. In terms of rendering speed and efficiency.
          </p>
          <p className={styles.sectionContent}>
            3. Flexibility and customizability: How easily the framework can be adapted to my specific needs. Can it be customized easily? Does it allow for the integration of other libraries and tools?
          </p>
          <p className={styles.sectionContent}>
            4. Features: Find out what built-in features there are such as state management, routing, and server-side rendering.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comparison</h2>
          <p className={styles.sectionContent}>
            <strong>Next.js:</strong>
          </p>
          <p className={styles.sectionContent}>
            Next.js: Next.js is a highly versatile React framework widely
            used for server-side rendering (SSR) and static site generation
            (SSG). Its key features are:
            Server-side rendering: Enables faster page loading and
            improved SEO by rendering pages on the server before
            sending them to the client.
            File-based routing: Allows developers to create clean,
            intuitive URL structures without the need for complex
            configuration.
            API routes: Provides built-in API routes for handling server-side logic and fetching data.
            Automatic code splitting: Optimizes performance by splitting
            code into smaller chunks that are loaded only when needed.
            Rich plugin ecosystem: Offers a wide range of plugins to
            extend Next.js functionality.
            Short summary: Use Next.js if you require server-side
            rendering, need excellent performance, or aim to build static
            websites or blogs.
          </p>
          <p className={styles.sectionContent}>
            <strong>Gatsby:</strong>
          </p>
          <p className={styles.sectionContent}>
            Gatsby.js is a powerful React framework primarily
            used for building static websites and progressive web apps
            PWAs. Its key features are:
            Static site generation: Generates HTML, CSS, and JavaScript
            files during the build process, resulting in lightning-fast
            loading times.
            GraphQL integration: Enables efficient data sourcing and
            manipulation by leveraging the GraphQL query language.
            Image optimization: Automatically optimizes images to
            improve performance without compromising quality.
            Plugin system: Offers a vast ecosystem of plugins for
            enhancing functionality, such as SEO optimization, analytics
            integration, and content management systems.
            Short summary: Gatsby.js if you prefer static site generation,
            need extensive customization options, or want to build a fast,
            content-driven website.
          </p>
          <p className={styles.sectionContent}>
            <strong>CRA:</strong>
          </p>
          <p className={styles.sectionContent}>
            CRA:
            Create React App: Create React App (CRA) is a
            straightforward, no-configuration tool provided by the React
            team for bootstrapping React projects. Its key features are:
            Zero configuration: Allows developers to start building React
            applications without the need for complex setup or build
            configuration.
            Excellent developer experience: Offers fast feedback loop,
            automatic reloading, and error reporting during development.
            Easy deployment: Simplifies the deployment process by
            providing optimized and production-ready builds.
            Short summary: CRA is a suitable choice for small to
            medium-sized projects that require quick setup, minimal
            configuration, and rapid development
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conclusion and result</h2>
          <p className={styles.sectionContent}>
          After reviewing Next.js, Gatsby.js, and Create React App (CRA), I have decided that Next.js is the best fit for my personal portfolio. Its server-side rendering enhances performance and SEO, crucial for a portfolios visibility. 
          Next.js also excels in flexibility, allowing custom integrations that are vital for a unique portfolio. While Gatsby and CRA have their merits, they dont match Next.js combination of performance, customization, and ease of use. Additionally, my familiarity with Next.js from past experience makes it a practical choice, ensuring a smoother development process for my project.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Refferences</h2>
          <p className={styles.sectionContent}>
          hackernoon.com. (n.d.). Popular React Framework Choices to Develop React Apps in 2023 | HackerNoon. [online] Available at: https://hackernoon.com/popular-react-framework-choices-to-develop-react-apps-in-2023 [Accessed Oct. 2023].
          </p>
          <p className={styles.sectionContent}>
          www.nan-labs.com. (n.d.). Top 5 React.js Frameworks for Building Modern Web Applications in 2023. [online] Available at: https://www.nan-labs.com/blog/reactjs-frameworks/ [Accessed Oct. 2023].
          </p>
          <p className={styles.sectionContent}>
          https://create-react-app.dev/docs/getting-started/
          </p>
          <p className={styles.sectionContent}>
          https://www.gatsbyjs.com/docs/
          </p>
          <p className={styles.sectionContent}>
          https://nextjs.org/docs
          </p>
        </section>
      </main>
    </div>
  );
};

export default CodeChoice;





