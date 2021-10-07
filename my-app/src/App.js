import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App container mx-auto bg-black'>
      <Header />
      <main className='min-h-screen p-10 text-white'>
        <Hero />
        <Project />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
