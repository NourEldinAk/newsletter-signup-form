import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import FormText from './FormText'

const LeftSideForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const checkEmail=(e)=>{
    e.preventDefault()
    if(email.length>1 && email.includes('@') && email.includes('.')){
      setIsValid(true)
      console.log('Valid')
      navigate( '/success' , {state:email})
    }else{
      console.log('not Valid')
      setIsValid(false)

    }
    setSubmitted(true)
  }

  return (
    <div className="w-3/5 max-[870px]:mobile-left-side  flex flex-col mb-6 mt-3 p-10 ">
   
    <h1 className="header">Stay updated!</h1>

    <FormText/>


    <form className='flex flex-col my-6' onSubmit={checkEmail}>
      <div className='flex justify-between'>

      <label className='font-semibold text-xs'>Email address</label>
      {!isValid && 
      submitted &&
      <label className='font-semibold text-xs text-primary'>Valid email required</label> }
      </div>

      <input 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className={`p-3 border rounded-md my-2  ${!isValid&& submitted && 'bg-[#ffe8e6] border-primary outline-primary text-primary'}`}
      type="text" placeholder='email@company.com' />
      <Button title='Subscribe to monthly newsletter'/>

    </form> 



  </div>  )
}

export default LeftSideForm