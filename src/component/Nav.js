import React, { useState } from "react";
import styles from "./nav.module.scss";
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={` container ${styles.navbar}`}>
      <div className={styles.navbar_logo}>
        <img src="logo.png" alt="logo" />
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      </div>
      <ul className={`${styles.nav_links} ${isOpen ? styles.open : ""}`}>
        <li>
          <a href="">Our work</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Book a Call</a>
        </li>
      </ul>
    </nav>
  );
};
