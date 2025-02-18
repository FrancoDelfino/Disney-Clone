import React from 'react'

const HeaderItem = ({name, Icon}) => {
  return (
    <div className='flex items-center gap-3 text-[18px] font-semibold cursor-pointer'>
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem