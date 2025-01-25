
import styles from './App.module.css';
import { Navbar } from './components/navbar/navbar';

import { Hero } from './Hero/Hero'
import { About } from './components/navbar/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/projects/projects'
import { Contact } from './components/Contact/Contact';

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>;
}

export default App;
