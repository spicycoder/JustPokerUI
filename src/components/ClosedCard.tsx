import React from 'react'

const ClosedCard = ({name}: {name: string}) => {
  return (
    <div className='flex justify-center bg-primary text-xs text-white m-4 w-24 h-36 rounded-2xl shadow-2xl hover:animate-pulse'>
        <div className='m-auto'>
          {name}
        </div>
    </div>
  )
}

export default ClosedCard