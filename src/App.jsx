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

// Data
const projectsData = [
  {
    id: 1,
    title: "Project 1: Portfolio Website",
    image: "https://via.placeholder.com/300x150.png?text=Project+Image",
    description: "This is the website where I am working right now...",
  },
  {
    id: 2,
    title: "Project 2: (Future Project)",
    image: "https://via.placeholder.com/300x150.png?text=Project+Image",
    description:
      "Yahan mein apne agle project (jaise Coursera lab) ki details daalon ga.",
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
