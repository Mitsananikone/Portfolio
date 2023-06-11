import React from "react";
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about">
      <div className={styles.about_container}>
        <div className={styles.about_infotext}>
          <h1 className={styles.about_title}>
            Hi, I'm Mit! <br/>
            <br className={styles.about_break} /> I have a passion for using technology to solve real-world problems and improve people's lives.
          </h1>
          <p className={styles.about_info}>
          I love creating apps that can be used in everyday life. Whether it's a productivity tool, a game, or a social media platform, I enjoy exploring new ideas and pushing the boundaries of what's possible with technology.
          </p>
          <div className={styles.about_contactme}>
            <a
              href="#contact"
              className={styles.about_contact}>
              Work With Me
            </a>
            <a
              href="#projects"
              className={styles.about_projects}>
              See My Past Work
            </a>
          </div>
        </div>
        <div className={styles.about_imgcontainer}>
          <img
            className={styles.about_image}
            alt="ProfilePic"
            src='/images/MitProfilePic.svg'
          />
        </div>
      </div>
    </section>
  );
}