import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/Logo.png" className={styles.logo} alt="Little Lemon Logo"></img>
      <nav className={styles.nav}>
        <a href="#menu" className={styles.link}>Menu</a>
        <a href="#reserve" className={`${styles.link} ${styles.active}`}>Reservations</a>
        <a href="#about" className={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
