
import React from "react";

import girlImg from '../assets/Photos/potrait_img.jpeg'

const Navbar = () => {
  return (
    <div className=" h-full w-full  text-gray-700 border-b-1 shadow-sm border-gray-400 flex items-center justify-between px-2.5">
      <div>
        <span className="text-xl">
          Dashboard
        </span>
      </div>

      <div className="flex justify-center gap-1.5 items-center p-2">
        <div className="flex flex-col space-y-0 ">
          <p className="m-0">Good Afternoon</p>
          <span className="font-semibold ml-8">Ms. Student</span>
        </div>

        <div className="hover:shadow-lg items-center rounded-full h-15 w-15 overflow-hidden ">
          <img 
          className="h-full  w-full object-cover"
          src="https://pics.craiyon.com/2023-06-23/2932d95512bc4f1fab05d41a506f139b.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
