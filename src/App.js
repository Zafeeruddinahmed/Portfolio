// src/App.js
import React from "react";
import RingsScene from "./RingsScene";

import "./App.css";

function App() {
  function ProjectCard({ title, description, githubLink }) {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    );
  }

  return (
    <div className="App">
      {/* 1️⃣ Background Canvas Container */}
      <div className="canvas-container">
        <RingsScene />
      </div>

      {/* 2️⃣ Main Content */}
      <div className="content">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">Zafeer Uddin Ahmed</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="App-header">
          <h1>Great to e‑meet you, I’m Zafeer!</h1>
          <p>Full Stack Developer | AI/ML Enthusiast</p>
          <a className="cta-button" href="#projects">View My Work</a>
        </header>

        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a passionate PHP Developer, Emerging Software Engineer, and Future AI Innovator—translating code into tomorrow’s breakthroughs.
          </p>
          <p>
            Skilled in MVC architecture, dynamic web applications, PHP, MySQL, HTML/CSS/JavaScript, and RESTful APIs. I write clean, efficient code, solve complex issues, and thrive in collaborative, high-impact projects.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <ProjectCard
            title="Smart PHP Log Analyzer"
            description="A real-time monitoring tool for application logs using PHP, Monolog, and WebSockets."
            githubLink="https://github.com/Zafeeruddinahmed/Smart-PHP-Log-Analyzer"
          />
          <ProjectCard
            title="MERN Stack eCommerce Website"
            description="Developed a MERN stack eCommerce platform with MongoDB, Express, React, and Node."
            githubLink="https://github.com/Zafeeruddinahmed/MERNStack"
          />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <p>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" width="20" style={{marginRight:8}}/>
            <a href="mailto:zafeerahmed0107@gmail.com">zafeerahmed0107@gmail.com</a>
          </p>
          <p>📞 <a href="tel:+919700833441">+91 9700833441</a></p>
          <p className="contact-links">
            <a href="https://github.com/Zafeeruddinahmed" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/zafeer-uddin-ahmed-655a14233" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
