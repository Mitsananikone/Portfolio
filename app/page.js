"use client";

import './globals.css'
import React from "react";
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
      {/* <Contact />  */}
    </main>
  );
}