"use client";

import './globals.css'
import styles from './page.module.css';
import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Qualification from "./components/Qualification/Qualification";


export default function App() {
  

  return (

    <main>

      <Navbar />

      <About />

      <Projects />


      <Qualification />

       <Skills />

    <Testimonials />

      
        {/*<Contact /> */}
  </main> 
   
  );
}



  //   <main styles={{ height: '100vh' }}>
  //   <div className={styles.SectionContainer}>
  //     <Navbar />
  //   </div>
  //   <div className={styles.SectionContainer}>
  //     <About />
  //   </div>
  //   <div className={styles.SectionContainer}>
  //     <Projects />
  //   </div>
  //   <div className={styles.SectionContainer}>
  //     <Qualification />
  //   </div>
  //   <div className={styles.SectionContainer}>
  //     <Skills />
  //   </div>
  //   <div className={styles.SectionContainer}>
  //     <Testimonials />
  //   </div>
  //   <div className={styles.SectionContainer}>
  //     <Contact />
  //   </div>
  // </main>