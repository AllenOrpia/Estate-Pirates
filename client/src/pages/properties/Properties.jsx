import React from 'react'
import SearchBar from '../../components/searchbar/SearchBar.jsx'
import './Properties.css'
import UseProperties from '../../hooks/UseProperties.jsx'
import { PuffLoader } from 'react-spinners'
import PropertyCard from '../../components/propertycard/PropertyCard.jsx'


const Properties = () => {
  
  const {data, isError, isLoading} = UseProperties();
  if (isError) {
    return (
      <div className="wrapper">
        <span>Could not fetch data</span>
      </div>
    )
  }
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
  }
  return (
    <div className="wrapper bg-white">
      <div className="flexColCenter paddings innerWidth gap-8 p-container">
        <SearchBar />
        <div className='flexCenter paddings properties'>
            {
              data.map((card, i) => (<PropertyCard card={card} key={i} />))
            }
        </div>
      </div>
    </div>
  )
}

export default Properties