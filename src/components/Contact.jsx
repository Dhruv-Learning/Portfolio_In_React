import React from "react";
import "./Contact.css"; // We'll create separate CSS for this component
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <AnimatedSection>
      <section className="contact">
      <h3>
        <i className="bi bi-envelope"></i> Contact
      </h3>

      <div className="contactMain">
        {/* Left Side: Contact Info */}
        <div className="cLeft">
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
          <p>
            <i className="bi bi-linkedin"></i>{" "}
            <a
              href="https://www.linkedin.com/in/dhruv-sharma-604306326/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <i className="bi bi-github"></i>{" "}
            <a
              href="https://github.com/Dhruv-Learning"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="cRight">
          <form onSubmit={(e) => alert("Form Submitted!")}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              required
            />

            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              placeholder="Say hello!"
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
    </AnimatedSection>
    
  );
};

export default Contact;
