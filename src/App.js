// App.js
import React from 'react';
import { BrowserRouter as Sk, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMeSection from './components/AboutMeSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/main.scss';

const App = () => {
  return (
    <Sk>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMeSection/>} />
        <Route path="/projects" element={<ProjectsSection/>} />
        <Route path="/skills" element={<SkillsSection/>} />
        <Route path="/contact" element={<ContactSection/>} />
      </Routes>
      <Footer />
    </Sk>
  );
};

export default App;
