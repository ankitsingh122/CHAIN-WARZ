import React from "react";
import ETH from "../assets/ETH.png"; 

import { useState, useEffect } from "react";
function BattleCard(props) {
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

        const nextResetHours = hours < 12 ? 12 : 24;
        const hoursLeft = nextResetHours - (hours % 12);
        const minutesLeft = 59 - minutes;
        const secondsLeft = 59 - seconds;

        return {
          hours: hoursLeft,
          minutes: minutesLeft,
          seconds: secondsLeft,
        };
      }


  return (
    <>
      
        <div className="border mt-5 rounded-xl" data-aos="slide-right">
          <div className="flex justify-center mt-3 ml-3">
            <img className="" src={props.img} alt="" /> 
          </div>
          <div className="flex justify-center mt-5">
            <div className="text-white ">
              ENTRY
              <br />
              PRICE
            </div>
            <img src={ETH} alt="" /> 
            <div className="text-white mt-3">0.0001</div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 px-3 py-1 rounded-xl mt-3 flex">
              <div className="text-white">
                PRIZE <br />
                POOL
              </div>
              <img src={ETH} alt="" />
              <div className="text-white mt-3">0.0000</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex bg-white px-12 py-2 rounded-xl mt-3 text-xl cursor-pointer ">
              Enter
            </div>
          </div>
          <div className="flex justify-center mx-10 mt-5">
            <div className="flex justify-center font-azonix md:text-4xl text-3xl md:px-10 px-6 py-2 border-gradient border-4 bg-black text-white">
              <div>{`${timeLeft.hours
                .toString()
                .padStart(2, "0")}:${timeLeft.minutes
                .toString()
                .padStart(2, "0")}:${timeLeft.seconds
                .toString()
                .padStart(2, "0")}`}</div>
            </div>
          </div>
          <div className="text-blue-600 flex justify-center mt-5">
            CLOSES IN
          </div>
        </div>
      
    </>
  );
}

export default BattleCard;
