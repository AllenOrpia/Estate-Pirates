import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common.js'

const Residencies = () => {
    return (
        <section className='residencies-wrapper'>
            <div className="paddings innerWidth overflow-hidden relative ">
                <div className="flexColStart residencies-heading ">
                    <span className='text-orange-400 text-xl'>Best Choices</span>
                    <span className='text-slate-600 text-3xl font-bold'>Popular Estates</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flex flex-col justify-center items-center gap-2 flex-wrap mt-16 w-max transition-all ease-in duration-300 hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-t from-white to to-blue-100 hover:shadow-xl'>
                                    <img src={card.image} alt="house estate" className=' w-full max-w-64 ' />

                                    <p className='text-slate-400'><span className='text-orange-400'>$</span>{card.price}</p>
                                    <span className='text-black text-3xl font-semibold'>{card.name}</span>
                                    <span className='text-slate-500 text-xl font-semibold w-64'>{card.detail}</span>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='residencies-button absolute top-1 right-0 gap-4 z-10 flexCenter '>
            <button onClick={ () => swiper.slidePrev()} className='p-2 text-xl text-blue-500 border-none rounded-lg bg-slate-100 cursor-pointer '>&lt;</button>
            <button onClick={ () => swiper.slideNext()} className='p-2 text-xl text-blue-500 border-2 rounded-lg bg-white cursor-pointer shadow-2xl'>&gt;</button>
        </div>
    )
}