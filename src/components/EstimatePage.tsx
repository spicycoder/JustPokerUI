import React from 'react'
import ClosedCard from './ClosedCard'
import OpenCard from './OpenCard'

const EstimatePage = () => {
  return (
    <div className='flex flex-col items-center justify-center m-4'>
      <div className="form-control">
        <label className="input-group input-group-md">
          <span>Story</span>
          <input type="text" placeholder="Id / Brief description" className="input input-bordered input-md w-36 sm:w-64 focus:animate-pulse" />
        </label>
      </div>
      <div className="btn-group m-4">
        <button className="btn hover:animate-pulse">🎴 Reset</button>
        <button className="btn hover:animate-pulse">🃏 Reveal</button>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center'>
        <ClosedCard name='John' />
        <ClosedCard name='Jenny' />
        <OpenCard name='Bob' value='XL' />
        <ClosedCard name='Karen' />
      </div>
      <div className="btn-group">
        <input type="radio" name="options" data-title="XS" title="XS" className="btn hover:animate-pulse" />
        <input type="radio" name="options" data-title="S" title="S" className="btn hover:animate-pulse" />
        <input type="radio" name="options" data-title="M" title="M" className="btn hover:animate-pulse" />
        <input type="radio" name="options" data-title="L" title="L" className="btn hover:animate-pulse" />
        <input type="radio" name="options" data-title="XL" title="XL" className="btn hover:animate-pulse" />
        <input type="radio" name="options" data-title="?" title="?" className="btn hover:animate-pulse" />
        <input type="radio" name="options" data-title="☕" title="☕" className="btn hover:animate-pulse" />
      </div>
    </div>
  )
}

export default EstimatePage