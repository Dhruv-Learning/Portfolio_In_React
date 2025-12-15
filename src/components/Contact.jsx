import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import AnimatedSection from "./AnimatedSection";
import {Send} from 'lucide-react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gn8lr4j", // 🔹 Replace this
        "template_pwjj1jw", // 🔹 Replace this
        form.current,
        "63CdV87FbMxqxWH-3" // 🔹 Replace this
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong. Try again!");
        }
      );
  };

  return (
    <AnimatedSection>
      <section className="contact" id="contact">
        <h3>
          <Send size={30} /> Contact
        </h3>

        <div className="contactMain">
          {/* Left Side - Info */}
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

          {/* Right Side - Form */}
          <div className="cRight">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Your Name</label>
              <input type="text" name="user_name" placeholder="Enter your name" required />

              <label htmlFor="email">Your Email</label>
              <input type="email" name="user_email" placeholder="abc@gmail.com" required />

              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Say hello!" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
