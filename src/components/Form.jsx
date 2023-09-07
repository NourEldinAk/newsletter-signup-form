import React from 'react'
import side_img from '../assets/illustration-sign-up-desktop.svg'
import side_img_mobile from '../assets/illustration-sign-up-mobile.svg'
import LeftSideForm from './LeftSideForm'

const Form = () => {
  return (
    <div className="form-container max-[870px]:mobile-container">

      
      {/* Left Side (Text) */}
      <LeftSideForm/> 
            
      {/* Right Side (Image) */}
      <div className="w-[400px]  max-[870px]:h-[400px] max-[870px]:w-[380px]">
        <img className="object-contain h-full max-[870px]:hidden" src={side_img} alt="illustration-cover" />
        <img className="object-contain h-full w-full min-[900px]:hidden" src={side_img_mobile} alt="illustration-cover" />

      </div>
    </div>
  )
}

export default Form