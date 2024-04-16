import React from "react";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import Cat from "../assets/Cat.png";
import Wallet from "../assets/Wallet.png";
import Coin from "../assets/Coin.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleAllowed = () => {
    setIsAllowed(!isAllowed);
  };

  return (
    <nav className="fixed z-50 py-4   w-max bg-white text-black   rounded-3xl px-5  flex justify-between ">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="hidden md:flex lg:space-x-16 space-x-6 lg:text-md  mt-2 lg:mx-14 mx-2  py-2 font-mono font-semibold  text-sm">
        <button onClick={toggleAllowed} className="cursor-pointer -mt-3">
          AllowList
        </button>
        <Link to="/Winner" className="cursor-pointer">
          Winner
        </Link>
        <Link to="/leaderboard" className="cursor-pointer">
          Leaderboard
        </Link>
        <Link to="/Battle" className="cursor-pointer">
          Battle now
        </Link>
      </div>

      <div className="md:flex space-x-4">
        <button
          onClick={toggleAllowed}
          className="hidden md:block md:bg-gradient-to-r from-blue-400 to-purple-500  lg:px-3 lg:py-3.5 px-2  md:rounded-md md:cursor-pointer md:text-center lg:pr-5 lg:pl-5 md:font-style lg:text-lg text-white"
        >
          Connect
        </button>

        <div className="hidden md:flex text-3xl md:p-2 py-2 px-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-gray-800 cursor-pointer md:pt-2 pt-1">
          <IoMdPerson className="text-white mt-1 w-6" />
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl md:p-2 py-1 px-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-gray-800 cursor-pointer md:pt-2 pt-1"
        >
          <HiOutlineMenuAlt4 className="text-white w-6 " />
        </button>

        {isMenuOpen && (
          <div
            className="fixed top-0 left-0  w-full h-full  bg-transparent z-50 flex justify-center items-center font-style "
            data-aos="zoom-in"
          >
            <div className=" bg-white rounded-lg px-2 mr-6 py-6 -mx-2 text-center shadow-lg">
              <div className="flex flex-col items-center">
                <button
                  onClick={toggleAllowed}
                  className="cursor-pointer text-lg bg-cyan-600 px-2 rounded-lg mt-2 text-white"
                >
                  ALLOW LIST
                </button>
                <Link
                  to="/Winner"
                  className="cursor-pointer text-lg bg-cyan-600 px-2 rounded-lg mt-3 text-white"
                >
                  WINNER
                </Link>
                <Link
                  to="/leaderboard"
                  className="cursor-pointer text-lg bg-cyan-600 px-2 rounded-lg mt-3 text-white"
                >
                  LEADERBOARD
                </Link>
                <Link
                  to="/Battle"
                  className="cursor-pointer text-lg bg-cyan-600 px-2 rounded-lg mt-3 text-white"
                >
                  BATTLE NOW
                </Link>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={toggleAllowed}
                  className="text-lg font-style border-black border-2  bg-white hover:bg-cyan-500 px-7 py-2 rounded-3xl text-black cursor-pointer mr-4"
                >
                  CONNECT
                </button>
                <button className="text-lg font-style border-black border-2  bg-cyan-600 px-7 py-2 rounded-3xl text-black cursor-pointer">
                  PROFILE
                </button>
              </div>
              <button
                onClick={toggleMenu}
                className=" text-white bg-red-500 px-3 py-1 rounded-xl text-md cursor-pointer mt-4 focus:outline-none "
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
        {isAllowed && (
          <div
            className="fixed top-0 left-0  w-full h-full  bg-transparent z-50 flex justify-center items-center md:-my-28"
            data-aos="zoom-in"
          >
            <div className="  bg-[#002e87] rounded-3xl px-5 md:mr-6 mr-8 py-10 text-center shadow-lg">
              <div className="text-white text-lg mb-4 font-style font-bold">
                CONNECT
              </div>
              <div className="text-white text-sm mb-4 text-center font-style font-bold">
                CHOOSE A WALLET <br /> CONNECTION METHOD
              </div>
              <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 ">
                {" "}
                <img src={Cat} alt="" />
                <div className="md:text-xl text-sm md:mt-5 mt-8 pr-3 font-style">
                  METAMASK
                </div>
              </div>
              <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 mt-4 ">
                {" "}
                <img src={Coin} alt="" />
                <div className="md:text-xl text-sm md:mt-5 mt-8 pr-3 font-style">
                  COINBASE
                </div>
              </div>
              <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 mt-4 ">
                {" "}
                <img src={Wallet} alt="" />
                <div className="md:text-xl text-sm md:mt-5 mt-8 md:pr-3 pr-24 font-style">
                  WALLETCONNECT
                </div>
              </div>

              <button
                onClick={toggleAllowed}
                className=" text-black font-bold  text-lg cursor-pointer mt-6 focus:outline-none bg-white rounded-2xl px-2 py-2 font-style"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
