import React from 'react';
import './App.css';
import { Departements } from './components/Departements';
import { Asked } from './components/Asked';
import { Doctors } from './components/Doctors';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { Make } from './components/Make';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { TopBar } from './components/TopBar.js';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Count } from './components/Count';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Home />
      <Header />
      <About />
      <Count />
      <Services />
      <Make />
      <Departements />
      <Doctors /> 
      <Asked />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
