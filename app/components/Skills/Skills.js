"use client";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data";
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills_section}>
      <div className={styles.skills_container}>
        <div className={styles.skills_iconContainer}>
          <ChipIcon className={styles.skills_icon} />
          <h1>
            Skills &amp; Technologies
          </h1>
          <p>
          I have a strong foundation in JavaScript and Node, with proficiency in React and Express. My experience includes developing full-stack web applications using the MERN stack and working with NoSQL databases like MongoDB and GraphQL. I am also skilled in building responsive and intuitive user interfaces with Material UI and have familiarity with Python for data processing and analysis.
          </p>
        </div>
        <div className={styles.skills_gallery}>
          {skills.map((skill) => (
            <div key={skill} className={styles.skills_check}>
              <div className={styles.skills_checkInner}>
                <BadgeCheckIcon className={styles.skills_checkIcon} />
                <span className={styles.skills_skillList}>
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}