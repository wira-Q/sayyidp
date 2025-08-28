import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "../App.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>Email:prawirasayyidmuhammad@gmail.com</p>
        <p>Phone: +62 895 3053 8978</p>

        <div className="contact-social">
          <a 
            href="https://github.com/wira-Q" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>
          <a 
            href="https://instagram.com/ssyd.123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <img src="/contact.jpg" alt="Contact illustration" />
    </section>
  );
}
