import React from "react";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import Cat from "../assets/Cat.png";
import Wallet from "../assets/Wallet.png";
import Coin from "../assets/Coin.png";
import { ConnectWallet } from "@thirdweb-dev/react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAllowed = () => {
    setIsAllowed(!isAllowed);
  };

  const handleMetamaskClick = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" });
    }
  };

  return (
    <>
      <nav className="fixed z-50 py-4   w-max bg-white text-black   rounded-3xl px-5  flex justify-between items-center ">
        <Link to="/">
          <img className="md:w-32 lg:w-44" src={Logo} alt="" />
        </Link>
        <div className="hidden md:flex lg:space-x-8 space-x-2 lg:text-md  mt-2 lg:mx-14 mx-2 items-center font-azonix font-semibold  lg:text-sm text-xs ">
          <div
            onClick={toggleAllowed}
            className="cursor-pointer hover:text-gray-500"
          >
            AllowList
          </div>
          <Link to="/Winner" className="cursor-pointer hover:text-gray-500 ">
            Winner
          </Link>
          <Link
            to="/leaderboard"
            className="cursor-pointer hover:text-gray-500"
          >
            Leaderboard
          </Link>
          <Link to="/Battle" className="cursor-pointer hover:text-gray-500">
            Battle now
          </Link>
        </div>

        <div className="md:flex space-x-4">
          <div className=" font-azonix mt-2 md:block hidden ">
            <ConnectWallet btnTitle="CONNECT" modalSize="compact" style={{}} />
          </div>
          <div className="hidden md:flex text-xl  my-2 py-3 px-3  bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-gray-800 cursor-pointer items-center">
            <IoMdPerson className="text-white items-center " />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl md:p-2 py-1 px-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-gray-800 cursor-pointer md:pt-2 pt-1"
          >
            <HiOutlineMenuAlt4 className="text-white w-6 " />
          </button>

          {isMenuOpen && (
            <div
              className="fixed top-0 left-0  w-full h-full  bg-transparent z-50 flex justify-center items-center font-azonix "
              data-aos="zoom-in"
            >
              <div className=" bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg px-2 mr-6 py-6 -mx-2 text-center shadow-lg">
                <div className="flex flex-col items-center">
                  <button
                    onClick={toggleAllowed}
                    className="cursor-pointer text-lg  px-2 rounded-lg mt-2 text-black bg-white"
                  >
                    ALLOW LIST
                  </button>
                  <Link
                    to="/Winner"
                    className="cursor-pointer text-lg  px-2 rounded-lg mt-3 text-black bg-white"
                  >
                    WINNER
                  </Link>
                  <Link
                    to="/leaderboard"
                    className="cursor-pointer text-lg  px-2 rounded-lg mt-3 text-black bg-white"
                  >
                    LEADERBOARD
                  </Link>
                  <Link
                    to="/Battle"
                    className="cursor-pointer text-lg  px-2 rounded-lg mt-3 text-black bg-white"
                  >
                    BATTLE NOW
                  </Link>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={toggleAllowed}
                    className="text-lg font-azonix border-black border-2  bg-white hover:bg-cyan-500 px-7 py-2 rounded-3xl text-black cursor-pointer mr-4"
                  >
                    CONNECT
                  </button>
                  <button className="text-lg font-azonix border-black border-2 bg-purple-700 px-7 py-2 rounded-3xl text-white cursor-pointer">
                    PROFILE
                  </button>
                </div>
                <button
                  onClick={toggleMenu}
                  className=" text-white bg-black px-3 py-1 rounded-xl text-md cursor-pointer mt-4 focus:outline-none "
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
                <div className="text-white text-lg mb-4 font-azonix font-bold">
                  CONNECT
                </div>
                <div className="text-white text-sm mb-4 text-center font-azonix font-bold">
                  CHOOSE A WALLET <br /> CONNECTION METHOD
                </div>
                <div
                  onClick={handleMetamaskClick}
                  className=" bg-blue-700 rounded-lg flex justify-between space-x-20 cursor-pointer "
                >
                  <img src={Cat} alt="" />
                  <div className="md:text-xl text-sm md:mt-5 mt-8 pr-3 font-azonix">
                    METAMASK
                  </div>
                </div>
                <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 mt-4 cursor-pointer ">
                  {" "}
                  <img src={Coin} alt="" />
                  <div className="md:text-xl text-sm md:mt-5 mt-8 pr-3 font-azonix">
                    COINBASE
                  </div>
                </div>
                <div className=" bg-blue-700 rounded-lg flex justify-between space-x-20 mt-4 cursor-pointer">
                  {" "}
                  <img src={Wallet} alt="" />
                  <div className="md:text-xl text-sm md:mt-5 mt-8 md:pr-3 pr-2 font-azonix">
                    WALLETCONNECT
                  </div>
                </div>

                <button
                  onClick={toggleAllowed}
                  className=" text-black font-bold  text-lg cursor-pointer mt-6 focus:outline-none bg-white rounded-2xl px-2 py-2 font-azonix"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
