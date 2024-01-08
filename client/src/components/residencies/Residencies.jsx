import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import { sliderSettings } from '../../utils/common.js'
import PropertyCard from '../propertycard/PropertyCard.jsx'
import UseProperties from '../../hooks/UseProperties.jsx'
import { PuffLoader } from 'react-spinners'

const Residencies = () => {
    const {data, isError, isLoading} = UseProperties();
    if (isError) {
        return (
          <div className="wrapper">
            <span>Could not fetch data</span>
          </div>
        )
      };
      if (isLoading) {
        return (
          <div className="wrapper flexCenter bg-white" style={{height: "60vh"}}>
            <PuffLoader 
              height="80"
              width="80"
              radius={1}
              color="#4066ff"
              aria-label='puff-loading'
            />
          </div>
        )
      };
    return (
        <div className='residencies-wrapper'>
            <div className="paddings innerWidth overflow-hidden gap-8 flex flex-col  ">
                    <div className="flexColStart residencies-headin mb-8">
                        <span className='text-orange-400 text-xl'>Best Choices</span>
                        <span className='text-slate-600 text-3xl font-bold'>Popular Estates</span>
                    </div>
                    <div className=''>
                        <Swiper {...sliderSettings} className=' overflow-visible'>
                            <SliderButtons />
                            {
                                data.slice(0,8).map((card, i) => (
                                    <SwiperSlide key={i}>
                                        <PropertyCard card={card} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                    </div>
            </div>
        </div>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=' residencies-button absolute -top-16 right-0 z-50 gap-4 flexCenter '>
            <button onClick={() => swiper.slidePrev()} className='p-2 text-xl text-blue-500 border-none rounded-lg bg-slate-100 cursor-pointer '>&lt;</button>
            <button onClick={() => swiper.slideNext()} className='p-2 text-xl text-blue-500 border-2 rounded-lg bg-white cursor-pointer shadow-2xl'>&gt;</button>
        </div>
    )
}