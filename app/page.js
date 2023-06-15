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
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Update the screen width on component mount and window resize
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (

    <main styles={{ border: '1px solid green' }}>
      <div className="colorBorder">
      <div className={styles.page_screenWidth}>
        Screen Width: {screenWidth}px
      </div>
        <Navbar />
      </div>
      <div className="colorBorder">
      <div className={styles.page_screenWidth}>
        Screen Width: {screenWidth}px
      </div>
        <About />
      </div>
      <div className="colorBorder">
      <div className={styles.page_screenWidth}>
        Screen Width: {screenWidth}px
      </div>
        <Projects />
      </div>
      <div className="colorBorder">
      <div className={styles.page_screenWidth}>
        Screen Width: {screenWidth}px
      </div>
        <Qualification />
      </div>
      <div className="colorBorder">
      <div className={styles.page_screenWidth}>
        Screen Width: {screenWidth}px
      </div>
        <Skills />
      </div>
      <div className="colorBorder">
      <div className={styles.page_screenWidth}>
        Screen Width: {screenWidth}px
      </div>
        <Testimonials />
      </div>
      <div className="colorBorder">
      <div className={styles.page_screenWidth}>
        Screen Width: {screenWidth}px
      </div>
        <Contact />
      </div>
    </main>
  );
}