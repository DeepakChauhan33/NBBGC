
// import React, { useState } from "react";
// import { IoMdHome } from "react-icons/io";
// import { MdLibraryBooks, MdMiscellaneousServices } from "react-icons/md";
// import { FaWindowMaximize, FaBook } from "react-icons/fa";
// import { PiSidebarSimpleBold } from "react-icons/pi";
// import { CgLogOut } from "react-icons/cg";
// import { Link } from "react-router-dom";
// import clg_photo from "../assets/Photos/NBBGC.jpeg";

// const Slidebar = ({Menu, setMenu}) => {

//   const [isOpen, setIsOpen] = useState(false);



//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div className="hidden md:flex fixed left-0 top-0 h-screen w-[20%] shadow-lg flex-col bg-white z-50">
//         <div className="flex justify-between items-center p-3 border-b">
//           <img className="h-12 w-auto" src={clg_photo} alt="College" />
//         </div>

//         <nav className="mt-3 p-3 flex flex-col flex-1">
//           <ul className="space-y-3 text-[1rem]">
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer"
//             onClick={()=>{
//               setMenu("Account")
//             }}>
//               <IoMdHome /> Account
//             </li>
//             <li 
//             className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer"
//             onClick={()=>{
//               setMenu("Book&Sub");
//             }}>

//               <FaBook /> Book & Subject
//             </li>
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <FaWindowMaximize /> Pay Fee
//             </li>
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <MdLibraryBooks /> Examination
//             </li>
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <MdMiscellaneousServices /> Services
//             </li>
//           </ul>

//           <button className="mt-auto flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md">
//             <CgLogOut /> Logout
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="md:hidden flex justify-between items-center p-3 border-b bg-white sticky top-0 z-50">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <PiSidebarSimpleBold className="text-[24px]" />
//         </button>

//         <div className="h-10 w-10 rounded-full border flex items-center justify-center">
//           O
//         </div>
//       </div>

//       {/* Mobile Sidebar Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <nav className="p-4 flex flex-col h-full">
//           <ul className="space-y-3">
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <IoMdHome /> Account
//             </li>
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <FaBook /> Book & Subject
//             </li>
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <FaWindowMaximize /> Pay Fee
//             </li>
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <MdLibraryBooks /> Examination
//             </li>
//             <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
//               <MdMiscellaneousServices /> Services
//             </li>
//           </ul>

//           <button className="mt-auto flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md">
//             <CgLogOut /> Logout
//           </button>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Slidebar;


import { Link, NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaBook, FaWindowMaximize } from "react-icons/fa";
import { MdLibraryBooks, MdMiscellaneousServices } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import clg_photo from "../assets/Photos/NBBGC.jpeg";

const Slidebar = () => {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-screen w-[20%] shadow-lg flex-col bg-white z-50">
      <div className="flex justify-between items-center p-3 border-b">
        <img className="h-12 w-auto" src={clg_photo} alt="College" />
      </div>

      <nav className="mt-3  flex flex-col flex-1 text-lg font-medium text-black">
        <ul className="space-y-3 text-[1rem]">
          <li>
            <NavLink to="/account" className={ ({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md transition text-black ${isActive
                ? "bg-yellow-200 text-gray-500"   // Active link
                : "bg-white text-gray-700 hover:bg-gray-200" // Inactive link
              }`
            }>
              <IoMdHome /> Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/book-subject" className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md transition text-black ${isActive
                ? "bg-yellow-200 text-gray-500"   // Active link
                : "bg-white text-gray-700 hover:bg-gray-200" // Inactive link
              }`
            }>
              <FaBook /> Book & Subject
            </NavLink>
          </li>
          <li>
            <NavLink to="/pay-fee" className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md transition text-black ${isActive
                ? "bg-yellow-200 text-gray-500"   // Active link
                : "bg-white text-gray-700 hover:bg-gray-200" // Inactive link
              }`
            }>
              <FaWindowMaximize /> Pay Fee
            </NavLink>
          </li>
          <li>
            <NavLink to="/examination" className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md transition text-black ${isActive
                ? "bg-yellow-200 text-gray-500"   // Active link
                : "bg-white text-gray-700 hover:bg-gray-200" // Inactive link
              }`
            }>
              <MdLibraryBooks /> Examination
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md transition text-black ${isActive
                ? "bg-yellow-200 text-gray-500"   // Active link
                : "bg-white text-gray-700 hover:bg-gray-200" // Inactive link
              }`
            }>
              <MdMiscellaneousServices /> Services
            </NavLink>
          </li>
        </ul>

        <button className="mt-auto flex items-center gap-2 p-2 hover:bg-gray-300 rounded-md">
          <CgLogOut /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Slidebar;
