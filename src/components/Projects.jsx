import React from "react";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h3>My Projects</h3>
      <div className="mainProject">
        <div className="pbox">
          <h4>Portfolio Website</h4>
          <p>A personal portfolio website showcasing my skills and projects.</p>
          <div className="btn">
            <button><a href="portfolio-in-react-taupe.vercel.app">Live Demo</a></button>
            <button><a href="https://github.com/Dhruv-Learning">GitHub</a></button>
          </div>
        </div>

        <div className="pbox">
          <h4>Expense Tracker</h4>
          <p>Track daily expenses with charts and reports.</p>
          <div className="btn">
            <button><a href="https://github.com/Dhruv-Learning">Live Demo</a></button>
            <button><a href="https://github.com/Dhruv-Learning">GitHub</a></button>
          </div>
        </div>

        <div className="pbox">
          <h4>To-Do App</h4>
          <p>A simple task management app built with React.</p>
          <div className="btn">
            <button><a href="https://github.com/Dhruv-Learning">Live Demo</a></button>
            <button><a href="https://github.com/Dhruv-Learning">GitHub</a></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
