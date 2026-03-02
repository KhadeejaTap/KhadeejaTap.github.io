import { useEffect } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { projects } from './data/projects';
import { experiences } from './data/experience';
import { debug } from './utils/debug';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, toggleDark] = useDarkMode();

  useEffect(() => {
    debug('App', 'Mounted — data check', {
      projectCount: projects.length,
      experienceCount: experiences.length,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
