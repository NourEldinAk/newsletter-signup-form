import React from 'react'

const Button = ({title}) => {
  return (
          <button
      className=' box-shadow py-4 px-4 bg-[#232742]
       text-white rounded-md mt-4 bg-hover-color w-full'
       
      >{title}</button>
  )
}

export default Button