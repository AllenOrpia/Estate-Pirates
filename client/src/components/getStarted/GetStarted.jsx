import React from 'react'

const GetStarted = () => {
  return (
    <section className="mt-3 paddings innerWidth  flex justify-center">
        
            <div className="flexColCenter min-w-full gap-4 p-8 rounded-lg bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 ">
                <span className='text-white font-semibold text-4xl'>Get Started!</span>
                <span className='text-white text-xl'>Join us today and find your dream home.
                    <br/>
                    Subscribe and stay up to date with new listings!
                </span>
                <button className='button bg-slate-100 opacity-75'>
                    <a href="mailto:abcd123@gmail.com" className='text-blue-600'>Get Started</a>
                </button>
            </div>
        
    </section>
  )
}

export default GetStarted