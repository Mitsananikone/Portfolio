// src/App.js

import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Qualification from '../components/Qualification';

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Qualification />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}