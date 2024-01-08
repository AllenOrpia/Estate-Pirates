import React from 'react'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import SearchBar from '../searchbar/SearchBar'

const Hero = () => {
  return (
    <section className="hero-wrapper relative pb-5">

      {/* left Section */}
      <div className="paddings innerWidth hero-container flex justify-between items-end gap-2 flex-wrap">
        <div className="hero-left paddings text-white flex flex-col justify-center items-start gap-10 min-h-full">

          <div className="">
           
              <motion.h1
                className='text-7xl font-semibold relative z-10'
                initial={{ y: "2rem", opacity: 9 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring"
                }}>

                Discover <br />
                your dream <br />
                estate

              </motion.h1>
            
          </div>

          <div className='flex flex-col justify-center items-start'>
            <p className='text-slate-300'>Find a variety of estates that suit your style</p>
            <p className='text-slate-300'>Made easy and simple to find your dream home</p>

          </div>

          <SearchBar />

          <div className="hero-stats flex justify-between items-center gap-2 flex-wrap w-full mt-3">
            <div className="flexColStart stat text-xl">
              <p className="text-4xl">
                <CountUp start={8800} end={9000} duration={4} />
                <span className=' text-orange-400'>+</span>
              </p>
              <span className='text-slate-300'>Premium Products</span>
            </div>


            <div className="flex flex-col justify-center items-start stat text-xl">
              <p className='text-4xl'>
                <CountUp start={1000} end={3600} duration={4} />
                <span className='text-orange-400'>+</span>
              </p>
              <span className='text-slate-300'>Happy Customers</span>
            </div>
            <div className="flexColStart stat text-xl">
              <p className='text-4xl'>
                <CountUp end={28} />
                <span className='text-orange-400'>+</span>
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
            <div className='hero-image image-container border-8 border-black  '>

              <img src="./hero-image.png" alt="" className=' min-w-full min-h-full' />

            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default Hero