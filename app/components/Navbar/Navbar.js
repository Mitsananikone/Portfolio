import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import styles from './Navbar.module.css';
export default function Navbar() {
    
  return (
    <header className={styles.navbar_header}>
      <div className={styles.navbar_container}>
        <a className={styles.navbar_title}>
          <a href="#about">
            Mit Sananikone
          </a>
        </a>
        <nav className={styles.navbar_nav}>
          <a href="#projects" className={styles.navbar_headerLinks}>
            Past Work
          </a>
          <a href="#qualification" className={styles.navbar_headerLinks}>
            Qualification
          </a>
          <a href="#skills" className={styles.navbar_headerLinks}>
            Skills
          </a>
          <a href="#testimonials" className={styles.navbar_headerLinks}>
            Testimonials
          </a>
          
        </nav>
        <a
          href="#contact"
          className={styles.navbar_hireMe}>
          Hire Me
          <ArrowRightIcon className={styles.navbar_arrowRight} />
        </a>
      </div>
    </header>
  );
}