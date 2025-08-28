import React, { useEffect, useState } from "react";
import "../App.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = sec.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">MyPortfolio</div>
      <ul>
        {["home","about","projects","gallery","contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setActive(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
