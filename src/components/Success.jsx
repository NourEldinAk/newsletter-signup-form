import React from 'react'
import icon from '../assets/icon-list.svg'
import Button from './Button'
import { useLocation, useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <form
    onSubmit={()=>{navigate('/')}}
    className='success-form-container'
    >
        <div className="flex px-12 max-[870px]:px-8 py-9 pb-0 flex-col items-start  h-full">
        <div className='flex gap-5 flex-col items-start max-[870px]:mt-10 '>

        <img src={icon} className='h-[50px] object-contain' alt="icon" />
        <h1 className='header '>
            Thanks for subscribing!
        </h1>
        <p>
            A confirmation email has been sent to 
            <span className='text-darkGrey font-semibold'> {location.state} </span> please open it and click the button inside
            to confirm your subscription
        </p>
            </div>

        <div className='w-full max-[870px]:mobile-success-button mt-5 '>

        <Button title='Dismiss message'/>
        </div>
        </div>
    </form>
  )
}

export default Success