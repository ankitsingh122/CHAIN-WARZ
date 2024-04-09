import React from "react";
import Timer from "../assets/Timer.png";

function Startbattle() {
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
         <img class="w-60 mt-5" src={Timer} alt="" />
       </div>
      </div>
    </div>
  );
}

export default Startbattle;
