import React from "react";
import  { useState, useEffect } from 'react';

function Startbattle() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

   
    const nextResetHours = (hours < 12) ? 12 : 24;
    const hoursLeft = nextResetHours - (hours % 12);
    const minutesLeft = 59 - minutes;
    const secondsLeft = 59 - seconds;

    return {
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft
    };
  }

  
  return (
    <div className=" bg-custom  w-screen h-full flex justify-center">
      <div className="mt-32">
        <div className="flex justify-center">
          <div className="bg-white  w-max rounded-3xl">
            <div className=" bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text  text-4xl rounded-lg  py-3 px-4 font-style">
              JOIN BATTLE
            </div>
            
          </div>
          
        </div>
        <div className="flex mx-10">
         <div className='flex justify-center font-style text-4xl px-10 py-2 mt-10 border-gradient border-4  bg-black text-white '>
      
      <div>{`${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}</div>
    </div>
       </div>
      </div>
    </div>
  );
}

export default Startbattle;
