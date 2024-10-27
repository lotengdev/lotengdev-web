import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

// Compontents
import Navbar from './components/Navbar'
import { EventPage } from './pages/event/index.jsx'
import { HomePage } from './pages/home/index.jsx';
import { SpeakerPage } from './pages/speaker/index.jsx';
import { AboutPage } from './pages/about/index.jsx';
import { Footer } from './components/Footer/index.jsx';
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <ScrollToTopButton/>
      <Footer />
    </>
  )
}

export default App
