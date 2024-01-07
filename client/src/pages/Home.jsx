import React from 'react'
import { useState } from 'react';

import Hero from '../components/hero/hero.jsx';
import Companies from '../components/companies/Companies.jsx';
import Residencies from '../components/residencies/Residencies.jsx';
import Value from '../components/value/Value.jsx';
import Contact from '../components/contact/Contact.jsx';
import GetStarted from '../components/getStarted/GetStarted.jsx';


const Home = () => {
    return (
        <div className='bg-white'>
            <div className=' bg-black'>
                <div className='white-gradient absolute w-80 h-80 bg-white bg-opacity-55 filter blur-xl rounded-full'></div>

                <Hero />
            </div>
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <GetStarted />
           


        </div>
    )
}

export default Home