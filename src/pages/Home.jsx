import React from 'react';
import WHITE_1_T from '../assets/WHITE_1_T.png';
import { IoMdNavigate } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';

const Home = () => {
  const onHoverBtn1 = () => {
    return 'absolute right-2 top-1/2 transform -translate-y-1/2 border bg-darkBlue text-white text-2xl p-2 rounded-full hover:scale-110 hover:bg-white hover:border-darkBlue hover:text-darkBlue transition-all duration-300';
  };

  const onHoverBtn2 = () => {
    return 'px-4 py-2 border border-darkBlue rounded-full hover:bg-darkBlue hover:text-white hover:scale-95 transition-all duration-500';
  };

  const onHoverIcons = () => {
    return 'hover:scale-110 transition duration-300 cursor-pointer';
  };

  return (
    <div className="max-w-6xl mx-auto h-screen w-screen">
      <div className="p-2 flex flex-col items-center justify-center">
        <div>
          <img
            className="w-[400px] h-[400px] cursor-pointer"
            src={WHITE_1_T}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 mb-10">
          <h1 className="uppercase text-4xl text-darkBlue font-bold">
            We are here to help you navigate your commute.
          </h1>
          <p className="text-lg w-[600px] text-center text-darkBlue">
            Public Transportation, Buses, Jeepney, Trains, P2P, Terminal
            Stations, Libreng Sakay, Book Car, Motorcycle, and More!
          </p>
        </div>

        <div className="relative w-[700px] mb-10">
          <input
            className="p-4 pr-20 w-full text-xl text-darkBlue border border-darkBlue rounded-full"
            type="text"
            placeholder="Where to Go?"
          />
          <button className={onHoverBtn1()}>
            <IoMdNavigate />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-10 mb-10">
          <div className="flex flex-row gap-6">
            <button className={onHoverBtn2()}>Sign Up</button>
            <button className={onHoverBtn2()}>Log In</button>
          </div>

          <p className="text-darkBlue">or using</p>
        </div>

        <div>
          <ul className="flex flex-row space-x-6 text-2xl text-darkBlue items-center">
            <li className={onHoverIcons()}>
              <FaFacebook />
            </li>

            <li className={onHoverIcons()}>
              <FaInstagramSquare />
            </li>

            <li className={onHoverIcons()}>
              <FaGoogle />
            </li>

            <li className={onHoverIcons()}>
              <FaApple />
            </li>
          </ul>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Home;
