
import { Link, NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaBook, FaWindowMaximize } from "react-icons/fa";
import { MdLibraryBooks, MdMiscellaneousServices } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import clg_photo from "../assets/Photos/NBBGC.jpeg";

const Slidebar = () => {

  //fixed left-0 top-0 h-screen w-[20%] z-50

  return (
    <div className="hidden md:flex  shadow-lg flex-col fixed left-0 top-0 h-screen w-[20%] z-50">
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
