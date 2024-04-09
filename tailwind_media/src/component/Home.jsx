import React from "react";
import Logo from "../assets/Logo.png";
import Robot from "../assets/Robot.png";
import Circle from "../assets/Circle.png"

import { IoMdPerson } from "react-icons/io";

function Home() {
  return (
    <div className="bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 w-screen h-full ">
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
            
            <div className="md:bg-gradient-to-r from-blue-400 to-purple-500  md:px-3 md:py-3.5 md:rounded-md md:cursor-pointer md:text-center md:pr-5 md:pl-5 md:font-style md:text-lg text-white">
              Connect
            </div>
            <div className="text-3xl md:p-2 py-2 px-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl   text-gray-800 cursor-pointer ">
              <IoMdPerson className="text-white md:pt-2 pt-1"/>
              </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="md:text-3xl font-style font-semi-bold mt-24 text-white">
          WELCOME TO
        </div>
        <div className=" md:text-9xl text-5xl font-style  font-bold text-white tracking-widest ">
          CHAIN WARZ
        </div>
      </div>
      <div>
        <div className="flex justify-center relative mt-24">
          <img  class= "absolute" data-aos='fade-top' src= {Robot} alt="" />
        <img class='' src={Circle} alt="" />
        

      </div>
      </div>
      <div>
        <div className="md:flex justify-center md:text-4xl md:font-style md:text-white md:-my-52 md:font-semibold md:tracking-wide md:text-center hidden">
          THE ULTIMATE BLOCKCHAIN BATTLE <br />
          WHERE YOU HAVE A CHANCE TO WIN BIG!
        </div>
        <div className="flex justify-center">
        <div className="flex justify-center md:mt-20 my-10">

        <div className="bg-white  w-max rounded-3xl md:mt-36">
          <button className=" bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text  text-4xl rounded-lg  py-3 px-4 font-style cursor-pointer">
            JOIN BATTLE
          </button>
        </div>
        </div>
      </div>
    </div>
      </div>
  );
}

export default Home;
