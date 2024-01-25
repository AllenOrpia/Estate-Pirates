import React from 'react'

const Footer = () => {
  return (
    <section className=' mt-4 '>
        <div className="container paddings innerWidth flex justify-center md:justify-between items-center flex-wrap border-t-2">
            {/* Left Side */}
            <div className="flex flex-col justify-center items-center md:items-start gap-2 ">
                <h2 className='text-blue-600 text-xl font-semibold'>Estate Pirates</h2>
                <span className='text-slate-500 text-xl'>
                    Our goal is to find you and your family 
                    the best home possible
                </span>

            </div>
            {/* Right Side */}
            <div className='flex flex-col justify-center items-center md:items-start gap-2 '>
                <span className='text-slate-600 text-3xl font-bold'>Information</span>
                <span className='text-slate-500 text-xl'>123 Sunset Drive, California</span>

                <div className="flex justify-evenly items-center gap-2 flex-wrap">
                    <span className='text-semibold text-lg'>Property</span>
                    <span className='text-semibold text-lg'>Services</span>
                    <span className='text-semibold text-lg'>Product</span>
                    <span className='text-semibold text-lg'>About Us</span>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Footer