import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const SearchBar = ({filter, setFilter}) => {
    return (
        <div className='search-bar w-full rounded-lg bg-white border-3 border-slate-600 p-2 flex justify-between items-center'>
            <HiLocationMarker className=' text-blue-500' size={25} />
            <input 
                type="text" 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder='Search by name/city/country'
                className=' border-none outline-none text-black w-full mx-1' />
            <button className='button bg-gradient-to-r from-blue-500 to-blue-700'>Search</button>
        </div>
    )
}

export default SearchBar