// src/App.jsx

import { useState, useEffect } from "react";
// React Router
import { Routes, Route } from "react-router-dom";

// Components & Pages
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";


const projectsData = [
  {
    id: 1,
    title: "Accommodation Finder (Concept)",
    image: "/Images/finder-app.png", 
    description:
      "A conceptual platform to connect students/bachelors directly with landlords, removing brokers. Users can filter flats by specs and price.",
    githubLink: "#", 
    liveLink: null, 
  },
  {
    id: 2,
    title: "React Tic Tac Toe Game",
    image: "/Images/tic-tac-toe.png", 
    description:
      "A classic Tic Tac Toe game built using React logic (useState) in a single HTML file, demonstrating core state management concepts.",
    githubLink: "https://github.com/Jaswant1213/tic-toe-game", 
    liveLink: "https://clinquant-sunflower-5e61c1.netlify.app/", 
  },
  {
    id: 3,
    title: "My Personal Portfolio",
    image: "/Images/my-portfolio.png", 
    description:
      "My responsive, multi-page personal portfolio built from scratch using React, React Router, and deployed on Netlify with CI/CD.",
    githubLink: "https://github.com/Jaswant1213/my-portfolio-react", // Portfolio ka GitHub link
    liveLink: "https://jaswantkumar-portfolio.netlify.app", // Portfolio ka live link
  },
];

function App() {
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar handleToggle={handleToggle} />

      <main>
        <Routes>
          {/* Route 1: Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Header ko ab 'handleToggle' ki zaroorat nahi */}
                <Header />
                <Home />
              </>
            }
          />

          {/* Route 2: Projects Page */}
          <Route
            path="/projects"
            element={<Projects projects={projectsData} />}
          />

          {/* Route 3: Contact Page */}
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
