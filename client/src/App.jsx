import { useState } from 'react';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/hero.jsx';
import Companies from './components/companies/Companies.jsx';
import Residencies from './components/residencies/Residencies.jsx';
import Value from './components/value/Value.jsx';
import Contact from './components/contact/Contact.jsx';
import GetStarted from './components/getStarted/GetStarted.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
  

  return (
    <>
     
      <div className=' bg-black'>
        <div className='white-gradient absolute w-80 h-80 bg-white bg-opacity-55 filter blur-xl rounded-full'></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />

     
    </>
  )
}

export default App
