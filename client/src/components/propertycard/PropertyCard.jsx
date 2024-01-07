import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const PropertyCard = ({card}) => {
    return (
        <div className=' relative z-0 flex flex-col justify-center items-start p-4 w-max m-auto gap-2 transition-all ease-in duration-300 hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-t from-white to to-blue-100 hover:shadow-xl'>
            <AiFillHeart size={24} className='absolute top-6 right-9 z-30' />
            <img src={card.image} alt="house estate" className=' w-60 h-40 rounded-lg' />
            <p className='text-slate-400 text-xl '><span className='text-orange-400'>$</span>{card.price}</p>
            <span className='text-black text-2xl font-semibold'>{card.name}</span>
            <span className='text-slate-500 text-m font-semibold w-64'>{card.detail}</span>

        </div>
    )
}

export default PropertyCard