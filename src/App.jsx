import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Cursor3D from "./components/Cursor3D";
import Background3D from "./components/Background3D";

function App() {
  const [theme, setTheme] = useState("dark");

  // Add theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
    <Background3D/>
      {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}

      <Cursor3D/>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
