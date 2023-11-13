import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg'
      alt='backgroud-image'/>;
      </div>
      <form className='w-3/12 relative p-12 bg-black'>
        <input type='text' placeholder='Email Address' className='p-2 m-2'/>
        <input type='password' placeholder='Password' className='p-2 m-2'/>
        <button className='p-4 m-4'>Sign In</button>      
      </form>
    </div>
  )
}

export default Login ;