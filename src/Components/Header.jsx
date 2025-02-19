import React, { useState } from 'react'
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
    const [toggle, setToggle] = useState(false)

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
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>

            <img src={logo} className='w-[80px] md:w-[115px]  object-cover' alt="Disney logo" />
        
            <div className='hidden md:flex gap-8'>
            {menu.map((item) => (
                <HeaderItem name={item.name} Icon={item.icon}/>
            ))}
            </div>
            <div className='flex md:hidden gap-5 '>
            {menu.map((item, index) => index < 3 && (
                <HeaderItem name={""} Icon={item.icon}/>
            ))}
            </div>
            <div className='md:hidden' 
            onMouseEnter={()=> setToggle(true)}>
                <HeaderItem name={""}Icon={HiDotsVertical}/>
            
            { toggle  ?  <div onMouseLeave={() => setToggle(false)} className='absolute mt-3 bg-[#121212] border-[1px] p-3 px-5 py-4 border-gray-600 '>
                {menu.map((item, index) => index > 2 && (
                <HeaderItem name={item.name} Icon={item.icon}/>            
            ))} 
            </div>:null}
            </div>
        </div>
        <img src={user} className='w-[40px] rounded-full' alt="Imagen de usuario" />

        
    </div>
  )
}

export default Header