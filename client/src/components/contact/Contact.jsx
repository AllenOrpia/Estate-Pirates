import React from 'react'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
    return (
        <section>
            <div className='mt-3 contact-container paddings innerWidth flex lg:justify-between justify-center items-center flex-wrap gap-2'>
                {/* Left Side */}
                <div className='flex flex-col justify-start items-center lg:items-start flex-1 gap-2 '>
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy Contact</span>
                    <span className='secondaryText'>
                        24/7 Service. Whenever you need us we are ready and waiting to help!
                    </span>

                    <div className='flexColStart contactModes mt-8 gap-4 '>
                        {/* First Row */}
                        <div className='row flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6'>
                            <div className="mode flexColCenter w-96 md:w-64 p-4 border-2 rounded-lg gap-2 transition-all duration-300 ease-in
                            hover:scale-110 hover:shadow-xl">
                                <div className="flexStart w-full gap-6">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail ">
                                        <span className='primaryText'>Call</span>
                                        <p className='secondaryText'>012 345 6789</p>
                                    </div>
                                </div>
                                <button className='button bg-gradient-to-r from-blue-300  to-blue-600 w-full hover:scale-75 duration-300 ease-in'> Call Now</button>
                            </div>
                            {/* Second Contact */}
                            <div className="mode flexColCenter w-96 md:w-64 p-4 border-2 rounded-lg gap-2 transition-all duration-300 ease-in
                            hover:scale-110 hover:shadow-xl">
                                <div className="flexStart w-full gap-6">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail ">
                                        <span className='primaryText'>Chat</span>
                                        <p className='secondaryText'>012 345 6789</p>
                                    </div>
                                </div>
                                <button className='button bg-gradient-to-r from-blue-300  to-blue-600 w-full hover:scale-75 duration-300 ease-in'> Chat Now</button>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className='row flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6'>
                            <div className="mode flexColCenter w-96 md:w-64 p-4 border-2 rounded-lg gap-2 transition-all duration-300 ease-in
                            hover:scale-110 hover:shadow-xl">
                                <div className="flexStart w-full gap-6">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail ">
                                        <span className='primaryText'>Video Call</span>
                                        <p className='secondaryText'>012 345 6789</p>
                                    </div>
                                </div>
                                <button className='button bg-gradient-to-r from-blue-300  to-blue-600 w-full hover:scale-75 duration-300 ease-in'>Video Chat</button>
                            </div>
                            {/* Second Contact */}
                            <div className="mode flexColCenter w-96 md:w-64 p-4 border-2 rounded-lg gap-2 transition-all duration-300 ease-in
                            hover:scale-110 hover:shadow-xl">
                                <div className="flexStart w-full gap-6">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail ">
                                        <span className='primaryText'>Message</span>
                                        <p className='secondaryText'>012 345 6789</p>
                                    </div>
                                </div>
                                <button className='button bg-gradient-to-r from-blue-300  to-blue-600 w-full hover:scale-75 duration-300 ease-in'>Leave a Message</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Right Side */}
                
                    <div className='image-container'>
                        <img src="./contact.jpg" alt="" className='h-full' />
                    </div>
                
            </div>
        </section>
    )
}

export default Contact