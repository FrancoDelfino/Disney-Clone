import React, { useState } from 'react'
import logo from "../assets/Images/disney.png"
import user from "../assets/Images/user.png"

import { HiDotsVertical } from 'react-icons/hi';
import { menu } from '../Constants/MenuList'
import HeaderItem from './HeaderItem';


const Header = () => {
    const [toggle, setToggle] = useState(false)
   

  return (
    <div className='flex items-center justify-between p-5 h-20'>
        <div className='flex gap-8 items-center'>

            <img src={logo} className='w-[75px]  object-cover' alt="Disney logo" />
        
            <div className='hidden md:flex gap-8'>
            {menu.map((item) => (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon}/>
            ))}
            </div>
            <div className='flex md:hidden gap-5 '>
            {menu.map((item, index) => index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon}/>
            ))}
            </div>
            <div className='md:hidden' 
            onMouseEnter={()=> setToggle(true)}>
                <HeaderItem Icon={HiDotsVertical}/>    
            
            { toggle  ?  <div onMouseLeave={() => setToggle(false)} className='absolute mt-3 bg-[#121212] border-[1px] p-3 px-5 py-4 border-gray-600 z-20'>
                {menu.map((item, index) => index >  2 && (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon}/>            
            ))} 
            </div>:null}
            </div>
        </div>
        <img src={user} className='w-[40px] rounded-full' alt="Imagen de usuario" />

        
    </div>
  )
}

export default Header