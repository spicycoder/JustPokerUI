import React from 'react'

const OpenCard = ({name, value}: {name: string, value: string}) => {
  return (
    <div className='flex flex-col justify-center bg-accent text-xs font-bold m-4 w-24 h-36 rounded-2xl shadow-2xl hover:animate-pulse'>
        <div className='m-auto text-xs'>
          {name}
        </div>
        <div className='m-auto badge badge-secondary'>
          {value}
        </div>
    </div>
  )
}

export default OpenCard