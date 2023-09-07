import React from 'react'
import icon from '../assets/icon-list.svg'

const FormText = () => {
  return (
    <div className='mt-4'>

    <p>Join 60.000+ product managers receiving monthly updates on:</p>  

    <div className='mt-4 mb-3 flex flex-col py-1 gap-2  '>
    <span className='flex gap-3 tracking-wide '>
      <img src={icon} alt="icon" className='h-4/5' />
      Product discovery and building what matters
      </span>
    <span className='flex gap-3 tracking-wide '>
    <img src={icon} alt="icon" className='h-4/5'  />
      Measuring to ensure updates are a success</span>
    <span className='flex gap-3 tracking-wide '>
    <img src={icon} alt="icon" className='h-4/5' />
      And much more!</span>
    </div>

    </div>  
       )
}

export default FormText