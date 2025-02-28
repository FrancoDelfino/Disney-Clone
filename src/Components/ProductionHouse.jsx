import React from 'react'
import { productionHouseList } from '../Constants/ProductionHouseList'

const ProductionHouse = () => {

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