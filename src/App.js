import React from "react";
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
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Zafeer Uddin Ahmed </h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="App-header">
        <h1>Hi, I'm Zafeer Uddin Ahmed </h1>
        <p>Full Stack Developer | AI/ML Enthusiast</p>
        <a className="cta-button" href="#projects">View My Work</a>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I am a passionate | PHP Developer | Emerging Software Engineer | Future AI Innovator | Translating Code into Tomorrow’s Breakthroughs.</p>
        <p>Passionate PHP Developer with a strong grasp of MVC architecture and a talent for constructing dynamic, user-friendly web applications. Proficient in PHP, MySQL, HTML, CSS, JavaScript, and RESTful APIs. Prioritizes the creation of clean and efficient code. Adept at acquiring new skills and resolving complex issues. Enthusiastic about collaborating and making valuable contributions to impactful projects.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ProjectCard
          title="Smart PHP Log Analyzer"
          description="A real-time monitoring tool for application logs using PHP, Monolog, and WebSockets."
          githubLink="https://github.com/your-github-repo"
        />
         <ProjectCard
          title="Smart PHP Log Analyzer"
          description="A real-time monitoring tool for application logs using PHP, Monolog, and WebSockets."
          githubLink="https://github.com/your-github-repo"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: affanzafeer@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
