import React from 'react';
import { IoMdNavigate } from 'react-icons/io';
import { FaBus } from 'react-icons/fa';

const P2P = () => {
  const onHoverBtn = () => {
    return 'absolute right-2 top-1/2 transform -translate-y-1/2 border bg-darkBlue text-white text-2xl p-2 rounded-full hover:scale-110 hover:bg-white hover:border-darkBlue hover:text-darkBlue transition-all duration-300';
  };

  return (
    <div>
      <div className="h-screen font-poppins">
        <div className="relative bg-darkBlue h-[200px] bg-opacity-55">
          <div className="absolute top-16 w-[800px] right-0 left-0 max-w-6xl mx-auto p-4 bg-darkBlue flex flex-col items-center justify-center text-white rounded-3xl">
            <div className="flex flex-col items-center space-y-2 mb-10">
              <h1 className="text-4xl font-bold">P2P Route Schedules</h1>
              <p className="text-xl">
                (Premium Point to Point) Routes and Fares{' '}
              </p>
            </div>

            <div className="relative w-[600px] text-darkBlue">
              <input
                className="w-full p-4 rounded-xl focus:outline-none"
                type="text"
                placeholder="e.g. BGC, One Ayala, Glorietta, Alabang, etc."
              />
              <button className={onHoverBtn()}>
                <IoMdNavigate />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-24 flex flex-col items-center space-y-8">
          <p className="text-xl text-darkBlue">
            P2P Schedules in Metro Manila (NCR)
          </p>

          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 p-4 border border-darkBlue text-darkBlue rounded-xl cursor-pointer hover:bg-darkBlue hover:text-white transition duration-500">
              <FaBus className="text-3xl" />
              <div>
                <h1 className="text-xl font-bold">
                  One Ayala Mall to The District Imus
                </h1>
                <p className="text-base">Monday - Saturday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2P;
