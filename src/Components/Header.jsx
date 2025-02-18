import React from 'react'
import logo from "../assets/Images/disney.png"
import user from "../assets/Images/user.png"
import {HiHome, 
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
    HiPlus
 } from 'react-icons/hi2';
 import { HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

const Header = () => {
    const menu =[
        {
            name:"HOME",
            icon:HiHome
        },
        {
            name:"SEARCH",
            icon:HiMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon:HiPlus
        },
        {
            name:"ORIGINALS",
            icon:HiStar
        },
        {
            name:"MOVIES",
            icon:HiPlayCircle
        },{
            name:"SERIES",
            icon:HiTv
        }
    ]


  return (
    <div className='flex items-center border-8 gap-8 justify-between'>
        <div className='flex '>

            <img src={logo} className='w-[80px] md:w-[115px]  object-cover' alt="Disney logo" />
        
            
            {menu.map((item) => (
                <HeaderItem name={item.name} Icon={item.icon}/>
            ))}

        </div>
        <img src={user} className='w-[40px] rounded-full' alt="Imagen de usuario" />

        
    </div>
  )
}

export default Header