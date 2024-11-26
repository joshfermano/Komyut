import React from 'react';
import WHITE_2_T from '../assets/WHITE_2_T.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const isActive = ({ isActive }) => {
    return isActive
      ? 'border-b-2 border-darkBlue ' + hoverClassList()
      : hoverClassList();
  };

  const hoverClassList = () => {
    return 'hover:scale-110 transition duration-500 cursor-pointer';
  };

  const hoverButton = () => {
    return 'px-4 py-3 border border-darkBlue rounded-full cursor-pointer text-darkBlue text-lg font-bold hover:scale-95 hover:text-white hover:bg-darkBlue transition-all duration-300';
  };

  return (
    <nav className="max-w-6xl mx-auto">
      <div className="p-2 pb-0 flex justify-between items-center border-b border-darkBlue">
        <div className="cursor-pointer">
          <img
            className="h-[200px] w-[200px] hover:cursor-pointer hover:scale-95 transition duration-300"
            src={WHITE_2_T}
            alt="Logo"
          />
        </div>

        <div className="text-xl text-darkBlue">
          <ul className="flex space-x-8">
            <NavLink to={'/'} className={isActive}>
              <li>Home</li>
            </NavLink>

            <NavLink to={'about'} className={isActive}>
              <li>About</li>
            </NavLink>

            <NavLink to={'p2p'} className={isActive}>
              <li>P2P Schedules</li>
            </NavLink>

            <NavLink to={'book'} className={isActive}>
              <li>Book</li>
            </NavLink>

            <NavLink to={'faq'} className={isActive}>
              <li>FAQs</li>
            </NavLink>

            <NavLink to={'support'} className={isActive}>
              <li>Support</li>
            </NavLink>
          </ul>
        </div>

        <button className={hoverButton()}>Where to Go?</button>
      </div>
    </nav>
  );
};

export default Navbar;
