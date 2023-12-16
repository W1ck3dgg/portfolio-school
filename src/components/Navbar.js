import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" legacyBehavior passHref>
        <a className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={100} height={150} />
        </a>
      </Link>
      <div className={styles.links}>
        <Link href="/this-semester" legacyBehavior><a>THIS SEMESTER</a></Link>
        <Link href="/learning-outcomes" legacyBehavior><a>LEARNING OUTCOMES</a></Link>
        <Link href="/about" legacyBehavior><a>ABOUT ME</a></Link>
        <Link href="/reading-guide" legacyBehavior><a>READING GUIDE</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;
