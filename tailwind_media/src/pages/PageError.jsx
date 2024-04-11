import React from 'react'
import Logo from "../assets/Logo.png";
import { IoMdPerson } from "react-icons/io";

function PageError() {
  return (
    <div className='bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 w-screen h-full'>
     <div className="flex justify-center">
       <nav className=" py-3 w-max bg-white text-black  mt-5 rounded-3xl px-5 flex justify-between ">
          <img src={Logo} alt="" />
          <div className="hidden md:flex space-x-16 text-md mt-2 mx-14  py-2 font-mono font-semibold  text-lg">
            <div>AllowList</div>
            <div>Minting</div>
            <div >Winners</div>
            <div >Battle</div>
          </div>
          <div className=" md:flex space-x-4">
            
            <div className="hidden lg:block md:bg-gradient-to-r from-blue-400 to-purple-500  md:px-3 md:py-3.5 md:rounded-md md:cursor-pointer md:text-center md:pr-5 md:pl-5 md:font-style md:text-lg text-white">
              Connect
            </div>
            <div className="text-3xl md:p-2 py-2 px-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl   text-gray-800 cursor-pointer ">
              <IoMdPerson className="text-white md:pt-2 pt-1"/>
              </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default PageError;
