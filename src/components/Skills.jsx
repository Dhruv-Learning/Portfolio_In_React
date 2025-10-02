import React from "react";

function Skills() {
  return (
    <section className="Skills" id="skills">
      <h3>My Skills</h3>
      <div className="skillsMain">
        <div className="box">
          <h4>Frontend</h4>
          <p><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span></p>
        </div>
        <div className="box">
          <h4>Backend</h4>
          <p><span>Node.js</span><span>Express</span><span>MongoDB</span></p>
        </div>
        <div className="box">
          <h4>Tools</h4>
          <p><span>Git</span><span>GitHub</span><span>VS Code</span></p>
        </div>
        <div className="box">
          <h4>Other</h4>
          <p><span>DSA</span><span>Problem Solving</span></p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
