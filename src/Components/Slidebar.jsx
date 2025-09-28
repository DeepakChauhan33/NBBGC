// import React, { useState } from 'react'
// import { IoMdHome } from "react-icons/io";
// import { MdLibraryBooks } from "react-icons/md";
// import { FaWindowMaximize } from "react-icons/fa";
// import { FaBook } from "react-icons/fa";
// import { MdMiscellaneousServices } from "react-icons/md";
// import { PiSidebarSimpleBold } from "react-icons/pi";
// import { PiSidebarSimple } from "react-icons/pi";
// import { CgLogOut } from "react-icons/cg";

// import { Link } from 'react-router-dom'




// import clg_photo from "../assets/Photos/NBBGC.jpeg";




// const Slidebar = () => {

//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>

//             <div className='hidden w-[22%] shadow-lg max-w-65 t-0  md:flex flex-col fixed left-0 top-0 h-screen'>

//                 <div className='flex justify-between t-0 p-3 border-2 '>
//                     <div className='h-15'>
//                         <img
//                             className='h-full'
//                             src={clg_photo} alt="img" />

//                     </div>

//                     <button>
//                         <PiSidebarSimple className='text-[25px] cursor-pointer   transition-transform duration-300 hover:-translate-x-0.5' />
//                     </button>
//                 </div>

//                 <nav className='mt-3 p-3 flex flex-col '>

//                     <ul className='p-2 space-y-5 text-[1rem]'>

//                         <li className='flex items-center gap-2 p-1.5 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default '>
//                             <IoMdHome /> Account
//                         </li>

//                         <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                             {/* <Link to="/examination">
//                                 <FaBook /> Book & Subject
//                             </Link> */}

//                             <FaBook /> Book & Subject

//                         </li>

//                         <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                             <FaWindowMaximize /> Pay Fee
//                         </li>

//                         <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                             <FaBook /> Book & Subject
//                         </li>

//                         <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                             <MdMiscellaneousServices /> Services
//                         </li>

//                         <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                             <MdMiscellaneousServices /> Services
//                         </li>
//                     </ul>

//                     <div className='flex mt-20 text-center hover:bg-gray-400 hover:rounded-md   '>
//                         <button className='flex justify-cenetr w-full  items-center gap-2 py-2 px-3.5 transition-transform duration-400 hover:-translate-x-3'>
//                             <CgLogOut /> logout
//                         </button>
//                     </div>
//                 </nav>
//             </div >

//             <div className=' md:hidden border-2 px-4 p-2.5 flex justify-between w-full'>

//                 <div className=' h-10 w-10 p-1 rounded-full flex justify-center items-center hover:bg-gray-200 '>
//                     <button>
//                         <PiSidebarSimpleBold className='text-[20px] transition-transform duration-200 hover:scale-[1.2]'
//                             onClick={() => {
//                                 setIsOpen(!isOpen);
//                             }}
//                         />
//                     </button>
//                     {/* <PiSidebarSimpleBold className='text-[20px] transition-transform duration-200 hover:scale-[1.2]' /> */}
//                 </div>

//                 <div className=''>

//                     <div className='h-10 w-10 rounded-full border-2 text-center '>
//                         O
//                     </div>
//                 </div>
//             </div>


//             <nav className={`fixed top-0 right-0 h-full z-100 border-2 m-1 mt-3 p-3 flex flex-col transition-transform duration-300 ease-in-out bg-red-300 overflow-auto md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
//                 }`} >

//                 <ul className='p-2 space-y-5 text-[1rem]'>

//                     <li className='flex items-center gap-2 p-1.5 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default '>
//                         <IoMdHome /> Account
//                     </li>

//                     <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                         <MdLibraryBooks /> Examination
//                     </li>

//                     <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                         <FaWindowMaximize /> Pay Fee
//                     </li>

//                     <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>



//                     </li>

//                     <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                         <MdMiscellaneousServices /> Services
//                     </li>

//                     <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-default'>
//                         <MdMiscellaneousServices /> Services
//                     </li>
//                 </ul>

//                 <div className='flex mt-20 text-center hover:bg-gray-400 hover:rounded-md   '>
//                     <button className='flex justify-cenetr w-full  items-center gap-2 py-2 px-3.5 transition-transform duration-400 hover:-translate-x-3'>
//                         <CgLogOut /> logout
//                     </button>
//                 </div>
//             </nav>


//         </>
//     )
// }

// export default Slidebar;


import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdLibraryBooks, MdMiscellaneousServices } from "react-icons/md";
import { FaWindowMaximize, FaBook } from "react-icons/fa";
import { PiSidebarSimpleBold } from "react-icons/pi";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
import clg_photo from "../assets/Photos/NBBGC.jpeg";

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-[22%] shadow-lg flex-col bg-white z-50">
        <div className="flex justify-between items-center p-3 border-b">
          <img className="h-12 w-auto" src={clg_photo} alt="College" />
        </div>

        <nav className="mt-3 p-3 flex flex-col flex-1">
          <ul className="space-y-3 text-[1rem]">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <IoMdHome /> Account
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <FaBook /> Book & Subject
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <FaWindowMaximize /> Pay Fee
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <MdLibraryBooks /> Examination
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <MdMiscellaneousServices /> Services
            </li>
          </ul>

          <button className="mt-auto flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md">
            <CgLogOut /> Logout
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-3 border-b bg-white sticky top-0 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          <PiSidebarSimpleBold className="text-[24px]" />
        </button>

        <div className="h-10 w-10 rounded-full border flex items-center justify-center">
          O
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="p-4 flex flex-col h-full">
          <ul className="space-y-3">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <IoMdHome /> Account
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <FaBook /> Book & Subject
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <FaWindowMaximize /> Pay Fee
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <MdLibraryBooks /> Examination
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              <MdMiscellaneousServices /> Services
            </li>
          </ul>

          <button className="mt-auto flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md">
            <CgLogOut /> Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default Slidebar;
