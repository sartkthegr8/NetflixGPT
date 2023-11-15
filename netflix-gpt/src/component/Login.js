import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true);

    const email = useRef(null);
    const password = useRef(null);
    

    const toglleSignInForm = ()=>{
          setIsSignInForm(!isSignInForm); //toggle true/false
    }

    const handleButtonClick = ()=>{
          //validate the form data
          //
          // console.log(email.current.value);
          // console.log(password.current.value);
          const message = checkValidData(email.current.value, password.current.value);    }

  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg'
      alt='backgroud-image'
      />
      </div>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className='w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm &&<input
         type='text'
         placeholder='Full Name' 
         className='p-2 my-4 w-full bg-gray-500'
        />}
       
        <input
         ref={email}
         type='text'
         placeholder='Email Address' 
         className='p-2 my-4 w-full bg-gray-500'
        />       

        <input 
         ref={password}
         type='password'
         placeholder='Password' 
         className='p-2 my-4 w-full  bg-gray-500'
        />  

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>      
        <p className='py-4 cursor-pointer' onClick={toglleSignInForm}>
        {isSignInForm ? "New to Netlfix ? Sign-Up Now" : "Existing User ? Sign-In Now"}
          
        </p>
      </form>
    </div>
  )
}

export default Login ;