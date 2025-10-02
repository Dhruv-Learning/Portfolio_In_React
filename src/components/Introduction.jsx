import React from "react";
import "./Introduction.css"; // Import CSS for this component

const Introduction = () => {
  return (
    <section className="introduction" id="home">
      {/* Left Side */}
      <div className="introLeft">
        <h2>Dhruv Sharma</h2>
        <p>BCA Graduate • Aspiring Software Developer</p>
        <p className="intro-text">I turn ideas into reliable, clean code.</p>

        <div className="intro-buttons">
          <button>
            <i className="bi bi-github"></i>{" "}
            <a
              href="https://github.com/Dhruv-Learning"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>

          <button>
            <i className="bi bi-linkedin"></i>{" "}
            <a
              href="https://www.linkedin.com/in/dhruv-sharma-604306326/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>

          <button className="view-projects">
            <a href="#projects">View Projects</a>{" "}
            <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="introRight">
        <div className="rightContent">
          <p>
            <i className="bi bi-geo-alt"></i> Bulandshahr, Uttar Pradesh, India
          </p>
          <p>
            <i className="bi bi-envelope"></i>{" "}
            <a href="mailto:ks8302768@gmail.com">ks8302768@gmail.com</a>
          </p>
          <p>
            <i className="bi bi-telephone"></i>{" "}
            <a href="tel:+916396309164">+91-6396309164</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
