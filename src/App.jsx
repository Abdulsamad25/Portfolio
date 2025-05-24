import React, {useEffect, useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Aos from "aos"
import 'aos/dist/aos.css'
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact  from './pages/Contact';
import Footer from './pages/Footer';


const App = () => {
   const [activeSection, setActiveSection] = useState('home');
   const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    // Initialize AOS
    Aos.init({once:false})

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
     <Navbar activeSection={activeSection} scrollToSection={scrollToSection}/> 
     <Home scrollToSection={scrollToSection} />
     <ScrollToTop showScrollTop={showScrollTop} />
     <About/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
