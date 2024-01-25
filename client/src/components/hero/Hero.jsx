import React from 'react'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import SearchBar from '../searchbar/SearchBar'

const Hero = () => {
  return (
    <section className="hero-wrapper relative pb-5 ">

      {/* left Section */}
      <div className="paddings innerWidth hero-container flex  justify-between items-center gap-2 flex-wrap">
        <div className="hero-left paddings text-white flex flex-col justify-center items-start gap-10 min-h-full">


          <div className="relative">

            <div className='blue-circle h-20 w-20 bg-gradient-to-tr from-blue-300 to-blue-600 absolute rounded-full -z-0 top-[-10%] right-[20%]'></div>
            <motion.h1
              className='text-7xl font-semibold relative z-10'
              initial={{ y: "2rem", opacity: 9 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}>

              Discover <br />
              your <span >dream</span> <br />
              home

            </motion.h1>

          </div>

          <div className='flex flex-col justify-center items-start'>
            <p className='text-slate-300 text-xl'>Find a variety of <span className='text-blue-500'>estates</span> that suit your <span className='text-blue-500'>style</span></p>
            <p className='text-slate-300 text-xl'>Take pleasure in the <span className='text-blue-500'>simplicity</span> of finding your dream home</p>

          </div>

          {/* <SearchBar /> */}

          <div className="hero-stats flex justify-between items-center gap-2 flex-wrap w-full mt-3">
            <div className="flexColStart stat text-xl">
              <p className="text-4xl">
                <CountUp start={8800} end={9000} duration={4} />
                <span >+</span>
              </p>
              <span className='text-slate-300'>Premium Products</span>
            </div>


            <div className="flex flex-col justify-center items-start stat text-xl">
              <p className='text-4xl'>
                <CountUp start={1000} end={3600} duration={4} />
                <span >+</span>
              </p>
              <span className='text-slate-300'>Happy Customers</span>
            </div>
            <div className="flexColStart stat text-xl">
              <p className='text-4xl'>
                <CountUp end={28} />
                <span >+</span>
              </p>
              <span className='text-slate-300'>Award Winning</span>
            </div>
          </div>
        </div>


        {/* Right Seciton */}
        <div className="hero-right flexCenter paddings" >
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring"
            }}>
            <div className='hero-image image-container border-8  border-black  '>

              <img src="./hero-image.png" alt="" className=' min-w-full min-h-full ' />

            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default Hero