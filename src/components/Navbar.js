import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={100} height={150} />
      </div>
      <div className={styles.links}>
        <Link href="/this-semester" legacyBehavior><a>This Semester</a></Link>
        <Link href="/learning-outcomes" legacyBehavior><a>Learning Outcomes</a></Link>
        <Link href="/about-me" legacyBehavior><a>About Me</a></Link>
        <Link href="/reading-guide" legacyBehavior><a>Reading Guide</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;
