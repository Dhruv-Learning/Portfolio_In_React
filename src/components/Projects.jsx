import React from "react";
import AnimatedSection from "./AnimatedSection";

function Projects() {
  return (
    <AnimatedSection>
      <section className="projects" id="projects">
        <h3>My Projects</h3>
        <div className="mainProject">
          <div className="pbox">
            <h4>ShareBite</h4>
            <p>
              ShareBite is a social food-sharing platform built with React and
              Firebase, where users can share homemade meals and connect with
              local food lovers.
            </p>
            <div className="btn">
              <button>
                <a
                  href="https://share-bite-tau.vercel.app/"
                 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Dhruv-Learning/ShareBite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>


          <div className="pbox">
            <h4>Web_Builder_App</h4>
            <p>
             AI Website Generator — Build complete, responsive websites instantly from prompts with live preview, themes, templates, and exportable code.
            </p>
            <div className="btn">
              <button>
                <a href="https://web-builder-xi.vercel.app/">
                  Live Demo
                </a>
              </button>
              <button>
                <a href="https://github.com/Dhruv-Learning">GitHub</a>
              </button>
            </div>
          </div>

          <div className="pbox">
            <h4>Expense Tracker</h4>
            <p>Track daily expenses with charts and reports.</p>
            <div className="btn">
              <button>
                <a href="https://expense-app-two-mocha.vercel.app/">
                  Live Demo
                </a>
              </button>
              <button>
                <a href="https://github.com/Dhruv-Learning">GitHub</a>
              </button>
            </div>
          </div>

          

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Projects;
