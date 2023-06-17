// src/components/Testimonials

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../../data";
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id={styles.testi_section}>
      <div className={styles.testi_container}>
        <UsersIcon className={styles.testi_iconContainer} />
        <h1>
          Client Testimonials
        </h1>
        <div className={styles.testi_gallery}>
          {testimonials.map(({quote, image, name, company}) => (
            <div className={styles.testi_clients}>
              <div className={styles.testi_clientsIconContainer}>
                <TerminalIcon className={styles.testi_clientsIcon}/>
                </div>
                <p >{quote}</p>
                <div className={styles.testi_portrait}>
                  <img
                    alt="testimonial"
                    src={image}
                    className={styles.testi_image}
                  />
                  <span className={styles.testi_nameContainer}>
                    <span className={styles.testi_name}>
                      {name}
                    </span>
                    <span className={styles.testi_company}>
                      {company}
                    </span>
                  </span>
                </div>
              </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
