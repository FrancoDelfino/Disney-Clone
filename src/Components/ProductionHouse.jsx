    import React from 'react'
import disney from "../assets/Images/disney-logo.png"
import marvel from "../assets/Images/marvel.png"
import natGeo from "../assets/Images/nationalG.png"
import pixar from "../assets/Images/pixar.png"
import starwars from "../assets/Images/starwar.png"

import disneyVideo from "../assets/Videos/disney.mp4"
import marvelVideo from "../assets/Videos/marvel.mp4"
import natGeoVideo from "../assets/Videos/national-geographic.mp4"
import pixarVideo from "../assets/Videos/pixar.mp4"
import starwarsVideo from "../assets/Videos/star-wars.mp4"

const ProductionHouse = () => {
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyVideo
        },
        {
            id: 2,
            image: marvel,
            video: marvelVideo
        },
        {
            id: 3,
            image: natGeo,
            video: natGeoVideo
        },
        {
            id: 4,
            image: pixar,
            video: pixarVideo
        },
        {
            id: 5,
            image: starwars,
            video: starwarsVideo
        },
        
    ]


  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item) => (
            <div key={item.id} className='bg-gradient-to-t from-gray-900 to-gray-700 rounded-lg hover:scale-110 transition-all duration-100 ease-in-out cursor-pointer relative shadow-xl shadow-gray-950'>
                <img src={item.image} className='w-full z-[1]' />
                <video src={item.video} autoPlay muted loop      
                className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-70'/>
                
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse