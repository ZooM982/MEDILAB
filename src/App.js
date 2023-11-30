import React from 'react';
import './App.css';
import './assets/main.js'
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
import { Back } from './components/Back-To-Top.js';
import { Testimonies } from './components/Testimonies.js';

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
      <Testimonies />
      <Gallery />
      <Contact />
      <Footer />
      <Back />
    </div>
  );
}

export default App;
