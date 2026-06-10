import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <>
    <div className="hidden lg:block">
    <div className="   w-full   shadow-sm bg-white flex items-center pt-5 px-4 py-4">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <h1 className="text-4xl font-extrabold text-yellow-500 pr-4">blink<span className="text-[green]">it</span></h1>
          
          <div className="ml-10">
            <p className="font-extrabold text-1xl">Delivery in 9 minutes</p>
            <p className="text-sm text-gray-500 flex items-center">
              Unit - 612B, TOWER-A, Unitech B.. <span><IoMdArrowDropdown className="text-2xl text-[black]"/></span>
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-170 ml-10 h-12 relative">
          <div className="absolute top-3 left-3  "><CiSearch className="w-6 h-6" /></div>
          <input
            type="text"
            placeholder='Search "sugar"'
            className="w-full h-full px-4 py-2 pl-12 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 ml-20 ">
          <button className="text-gray-700 font-medium text-[20px]">Login</button>

          <button className="flex items-center gap-2 ml-10 bg-[#e5e5e5] px-2 py-2.5 rounded-md text-[white] cursor-not-allowed font-bold">
            <span><MdOutlineShoppingCart className="text-3xl" /></span>
            My Cart
          </button>
        </div>
      </div>
      </div>
      {/* {small device header} */}
      <div className="block sm:block  lg:hidden">
         <div className="w-full  shadow-sm bg-white grid grid-cols-3 pt-5 py-4">
        {/* Left Section */}
        <div className="flex items-center gap-6 col-span-2">
          <div className="ml-10">
            <p className="font-extrabold text-1xl">Delivery in 9 minutes</p>
            <p className="text-sm text-gray-500 flex items-center">
              Unit- 612B, TOWER-A, Unitech Business Zone, Nirvana Country, Sector 50, Gurugram, Haryana 122018, India
            </p>
          </div>
        </div>
         {/* Right Section */}

         <div className="flex justify-end gap-6 mr-4 ">
        <FaRegUserCircle className="text-3xl" />
        </div>

        {/* Search Bar */}
        <div className="col-span-3 ml-10 h-12 relative">
          <div className="absolute top-3 left-3  "><CiSearch className="w-6 h-6" /></div>
          <input
            type="text"
            placeholder='Search "sugar"'
            className="w-full h-full px-4 py-2 pl-12 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>
      </div>
      </div>
      </>
  );
}

export default Navbar;
