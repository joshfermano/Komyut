import React from 'react';
import Angkas from '../assets/Angkas.png';
import Grab from '../assets/Grab-Logo.png';
import Joyride from '../assets/joyride.jpg';
import Moveit from '../assets/moveit.png';

const Book = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 text-darkBlue">
      <div className="flex flex-col items-center">
        <div className="flex flex-col space-y-5 items-center">
          <h1 className="font-bold text-6xl uppercase">
            Looks like you need a ride...
          </h1>
          <p className="uppercase font-semibold italic text-2xl">book here</p>
        </div>

        {/* Logos */}
        <div className="flex flex-row space-x-20 items-center justify-center mt-20">
          <div className="p-10 bg-white shadow-lg shadow-darkBlue rounded-full cursor-pointer hover:scale-110 hover:shadow-blue-200 transition duration-500">
            <img className="w-[100px] h-[100px]" src={Angkas} alt="" />
          </div>

          <div className="p-10 bg-white shadow-lg shadow-darkBlue rounded-full cursor-pointer hover:scale-110 hover:shadow-blue-700 transition duration-500">
            <img className="w-[100px] h-[100px]" src={Joyride} alt="" />
          </div>

          <div className="p-10 bg-white shadow-lg shadow-darkBlue rounded-full cursor-pointer hover:scale-110 hover:shadow-red-700 transition duration-500">
            <img className="w-[100px] h-[100px]" src={Moveit} alt="" />
          </div>

          <div className="p-10 bg-white shadow-lg shadow-darkBlue rounded-full cursor-pointer hover:scale-110 hover:shadow-green-700 transition duration-500">
            <img className="w-[200px] h-[100px]" src={Grab} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
