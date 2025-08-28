import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}
