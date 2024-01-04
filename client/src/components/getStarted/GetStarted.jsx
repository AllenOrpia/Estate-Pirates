import React from 'react'

const GetStarted = () => {
  return (
    <section>
        <div className="container paddings innerWidth">
            <div className="inner-container flexColCenter min-w-full gap-4 p-8 rounded-lg border-4 bg-blue-600 text-center border-blue-600">
                <span className='text-white font-semibold text-4xl'>Get Started!</span>
                <span className='text-white text-xl'>Join us today and find your dream home.
                    <br/>
                    Subscribe and stay up to date with new listings!
                </span>
                <button className='button bg-slate-100 opacity-75'>
                    <a href="mailto:abcd123@gmail.com" className='text-blue-500'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted