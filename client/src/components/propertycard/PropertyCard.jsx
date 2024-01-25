import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { truncate } from 'lodash'
import { useNavigate } from 'react-router-dom'
import Heart from '../../components/heart/Heart.jsx'
import './PropertyCard.css'


const PropertyCard = ({card}) => {
    const navigate = useNavigate();

    return (
        <div className='p-card relative z-0 flex flex-col justify-center items-start p-4 w-max m-auto gap-2 transition-all ease-in duration-300 hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-t from-white to to-blue-100 hover:shadow-xl'
            onClick={() => navigate(`../properties/${card.id}`)}
            >
            <Heart id={card?.id} />
            <img src={card.image} alt="house estate" className=' w-60 h-40 rounded-lg self-center' />
            <p className='text-slate-400 text-xl '><span className='text-blue-500'>$</span>{card.price}</p>
            <span className='text-black text-2xl font-semibold'>{truncate(card.title, {length: 15})}</span>
            <span className='text-slate-500 text-m font-semibold w-64 '>{truncate(card.description, {length: 80})}</span>

        </div>
    )
}

export default PropertyCard