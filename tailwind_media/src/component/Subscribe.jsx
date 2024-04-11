import React, { useState } from 'react';
import Ap from '../assets/Ap.png';

function Subscribe() {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    
    const handleOnChange = (e) => {
        setEmail(e.target.value);
        setIsValid(validateEmail(e.target.value));
    }
     
    const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
   const handleSubmit = () => {
    if (!isValid) {
      alert('Check email!');
      setEmail('');
    } else {
      setEmail('');
      setIsValid(false);
    }
   
  };


  return (
    <div className='bg-custom w-screen h-full'>
      <div className='flex justify-center'>
        <div className='bg-gradient-to-tr from-blue-900 via-blue-900 to-blue-500 mt-24 w-screen h-full mx-14  rounded-lg flex '>
      
          <div className='lg:mx-44 mx-8  font-style font-semibold text-white  '>
            <div>
              <div className='lg:text-8xl text-4xl  font-bold md:mt-56 mt-10'>SUBSCRIBE</div>
              <div className='lg:text-md text-sm mt-6'>TO BE AUTOMATICALLY NOTIFIED OF</div>
              <div className='text-sm'>UPCOMING BATTLES</div>
              <div className='lg:text-md mt-10 text-sm'>E-MAIL</div>
            </div>
            <input
              type="email"
              className="w-44 h-14 px-4 py-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-inherit border"
              placeholder="YOUR E-MAIL"
              value={email}
              onChange={handleOnChange} data-aos='fade-right'
            />
            <div className="bg-white w-max rounded-lg mt- my-10"data-aos='fade-right'>
              <button onClick={handleSubmit} className="bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text text-2xl rounded-lg py-3 px-3 font-style">
                SUBSCRIBE
              </button>
            </div>
          </div>
          
    
          <div>
            <div className=' md:flex justify-end'>
              <img className='hidden md:block md:mx-60 md:mt-40'data-aos='fade-top' src={Ap} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
