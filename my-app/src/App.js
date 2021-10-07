import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
      <Header />
      <main className='px-5 md:px-10'>
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
