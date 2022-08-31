import React from 'react';

import Header from './components/Header/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './scss/app.scss';

function App() {
   return (
      <>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Services />
         <Portfolio />
         <Testimonials />
         <Contact />
         <Footer />
      </>
   );
}

export default App;
