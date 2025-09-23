import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { PiSidebarSimpleBold } from "react-icons/pi";
import { PiSidebarSimple } from "react-icons/pi";


import clg_photo from "../assets/Photos/NBBGC.jpeg";




const Slidebar = () => {

    const[isOpen, setIsOpen]=useState(false);

    return (
        <>

            <div className='hidden w-[25%] shadow-2xl max-w-65 t-0 h-[100vh] md:flex flex-col'>

                <div className='flex justify-between t-0 p-3 border-b-2'>
                    <div className='h-15'>
                        <img 
                        className='h-full'
                        src={clg_photo} alt="img" />
                    </div>

                    <button>
                        <PiSidebarSimple className='text-[25px] transition-transform duration-300 hover:scale-[1.2]' />
                    </button>
                </div>

                <nav className='mt-3 p-3'>

                    <ul className='p-2 space-y-5 text-[1rem]'>

                        <li className='flex items-center gap-2 p-1.5 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-pointer '>
                            <IoMdHome /> Account
                        </li>

                        <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-pointer'>
                            <MdLibraryBooks /> Examination
                        </li>

                        <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-pointer'>
                            <FaWindowMaximize /> Pay Fee
                        </li>

                        <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-pointer'>
                            <FaBook /> Book & Subject
                        </li>

                        <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-pointer'>
                            <MdMiscellaneousServices /> Services
                        </li>

                        <li className='flex items-center gap-2 p-1 pl-2 hover:rounded-md hover:bg-gray-400/30 hover:cursor-pointer'>
                            <MdMiscellaneousServices /> Services
                        </li>
                    </ul>
                </nav>
            </div >

            <div className=' md:hidden border-2 px-4 p-2.5 flex justify-between w-full'>

                        <div className=' h-10 w-10 p-1 rounded-full flex justify-center items-center hover:bg-gray-200 '>
                            <PiSidebarSimpleBold className='text-[20px] transition-transform duration-200 hover:scale-[1.2]' />
                        </div>

                        <div className=''>
                            <div className='h-10 w-10 rounded-full border-2 text-center '>
                                O
                            </div>
                        </div>
                </div>

        </>
    )
}

export default Slidebar;
