import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import { EventPage } from './pages/event/index.jsx';
import { HomePage } from './pages/home/index.jsx';
import { SpeakerPage } from './pages/speaker/index.jsx';
import { AboutPage } from './pages/about/index.jsx';
import { ContactPage } from './pages/contact/index.jsx';
import { Footer } from './components/Footer';
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  useEffect(() => {
    // Apply dark class to body based on isDarkMode state
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <Navbar darkMode={isDarkMode} toggleTheme={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
        <Route path="/event" element={<EventPage isDarkMode={isDarkMode} />} />
        <Route path="/speaker" element={<SpeakerPage isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<AboutPage isDarkMode={isDarkMode} />} />
        <Route path="/contact" element={<ContactPage isDarkMode={isDarkMode} />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
