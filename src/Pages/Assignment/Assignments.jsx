import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";


const Assignments = () => {
    return (
    
        <section className='space-y-4 '>


            <div className="p-3 ">
                <h4 className="text-lg font-semibold">Hello, Deepak !</h4>
                <p className="text-sm text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                    inventore.
                </p>
            </div>

            {/* Academic Performance */}
            <div className=" p-3 grid grid-cols-4 gap-4 text-center">

                {/* BOX1 */}

                <div className="border shadow-sm py-10 rounded-xl flex justify-around items-center gap-1 transform hover:scale-104 transition duration-100">
                    <div>
                        <span className="text-[16px] text-gray-500 font-bold">
                            Current GPA
                        </span>

                        <h5>3.8</h5>
                    </div>

                    <div className=" bg-blue-100 h-15 w-15 flex items-center justify-center text-[28px] rounded-sm text-blue-800">
                        < FaGraduationCap />

                    </div>
                </div>

                {/* BOX2 */}

                <div className="border shadow-sm py-10 rounded-xl flex justify-around items-center gap-1 transform hover:scale-104 transition duration-100">
                    <div>
                        <span className="text-[16px] text-gray-500 font-bold">
                            Enrolled Courses
                        </span>

                        <h5>6</h5>
                    </div>

                    <div className=" bg-green-100 h-15 w-15 flex items-center justify-center text-[28px] rounded-sm text-green-500">
                        <FaBookOpen />


                    </div>
                </div>

                {/* BOX 3 */}

                <div className="border shadow-sm py-10 rounded-xl flex justify-around items-center gap-1 transform hover:scale-104 transition duration-100">
                    <div>
                        <span className="text-[16px] text-gray-500 font-bold">
                            Classes Taken This Week
                        </span>

                        <h5>15</h5>
                    </div>

                    <div className=" bg-purple-200 h-15 w-15 flex items-center justify-center text-[28px] rounded-sm text-purple-700">
                        <FaRegClock />

                    </div>
                </div>

                {/* BOX 4 */}

                <div className="border shadow-sm py-10 rounded-xl flex justify-around items-center gap-1 transform hover:scale-104 transition duration-100">
                    <div>
                        <span className="text-[16px] text-gray-500 font-bold">
                            Achievements
                        </span>

                        <h5>9</h5>
                    </div>

                    <div className=" bg-yellow-100 h-15 w-15 flex items-center justify-center text-[28px] rounded-sm text-yellow-700">
                        <GoTrophy />

                    </div>
                </div>

            </div>


            <div className='p-4 space-y-5 border border-gray-600 shadow-md'>

                <div className='flex bg-gray-400 justify-evenly items-center rounded-full'>
                    <button className='bg-white text-black text-[12px] !rounded-xl py-0.5 w-[32%] my-2'>Pending (5)</button>
                    <button className='bg-white text-black text-[12px] !rounded-xl py-0.5 w-[32%] my-2'>Submitted (3)</button>
                    <button className='bg-white text-black text-[12px] !rounded-xl py-0.5 w-[32%] my-2'>Overdue (1)</button>
                </div>


                <div className='p-3 border-1 border-gray-300 rounded-md space-y-5'>

                    <div className='border-1 border-gray-300 shadow-sm p-2 rounded-sm '>

                        <div className='  flex justify-between items-center'>

                            <div>
                                <span className='text-[15px] font-bold m-0 '>Physics lab Report</span>
                            <p className='text-gray-400 m-0'>Physics 101</p>
                            </div>

                            <div className='rounded-2xl '>
                                <button className='bg-red-600 text-white !rounded-lg px-2 py-0.5 hover:bg-red-500 hover:shadow-sm'>View</button>
                            </div>
                        </div>

                        <div>
                            <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, officia!</p>
                        </div>

                        <div className='flex justify-items-start items-center gap-3.5'>
                            <span className='text-gray-600 '>
                                Cal Due: Oct 18, 2025
                            </span>

                            <span className='text-gray-600 '>
                                clo 11:59 PM
                            </span>

                            <span className='text-gray-600 '>
                                ass 100 points
                            </span>
                        </div>


                        <div className='p-2 flex gap-2'>
                            <button className='bg-black text-white p-1 px-2 font-semibold !rounded-lg'>
                                Submit Assignment
                            </button>

                            <button className='bg-gray-300 px-1 !rounded-sm hover:text-gray-500'> 
                                View Details
                            </button>
                        </div>
                    </div>



                    <div className='border-1 border-gray-300 shadow-sm p-2 rounded-sm '>

                        <div className='  flex justify-between items-center'>

                            <div>
                                <span className='text-[15px] font-bold m-0 '>Physics lab Report</span>
                            <p className='text-gray-400 m-0'>Physics 101</p>
                            </div>

                            <div className='rounded-2xl '>
                                <button className='bg-red-600 text-white !rounded-lg px-2 py-0.5 hover:bg-red-500 hover:shadow-sm'>View</button>
                            </div>
                        </div>

                        <div>
                            <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, officia!</p>
                        </div>

                        <div className='flex justify-items-start items-center gap-3.5'>
                            <span className='text-gray-600 '>
                                Cal Due: Oct 18, 2025
                            </span>

                            <span className='text-gray-600 '>
                                clo 11:59 PM
                            </span>

                            <span className='text-gray-600 '>
                                ass 100 points
                            </span>
                        </div>


                        <div className='p-2 flex gap-2'>
                            <button className='bg-black text-white p-1 px-2 font-semibold !rounded-lg'>
                                Submit Assignment
                            </button>

                            <button className='bg-gray-300 px-1 !rounded-sm hover:text-gray-500'> 
                                View Details
                            </button>
                        </div>
                    </div>



                    <div className='border-1 border-gray-300 shadow-sm p-2 rounded-sm '>

                        <div className='  flex justify-between items-center'>

                            <div>
                                <span className='text-[15px] font-bold m-0 '>Physics lab Report</span>
                            <p className='text-gray-400 m-0'>Physics 101</p>
                            </div>

                            <div className='rounded-2xl '>
                                <button className='bg-red-600 text-white !rounded-lg px-2 py-0.5 hover:bg-red-500 hover:shadow-sm'>View</button>
                            </div>
                        </div>

                        <div>
                            <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, officia!</p>
                        </div>

                        <div className='flex justify-items-start items-center gap-3.5'>
                            <span className='text-gray-600 '>
                                Cal Due: Oct 18, 2025
                            </span>

                            <span className='text-gray-600 '>
                                clo 11:59 PM
                            </span>

                            <span className='text-gray-600 '>
                                ass 100 points
                            </span>
                        </div>


                        <div className='p-2 flex gap-2'>
                            <button className='bg-black text-white p-1 px-2 font-semibold !rounded-lg'>
                                Submit Assignment
                            </button>

                            <button className='bg-gray-300 px-1 !rounded-sm hover:text-gray-500'> 
                                View Details
                            </button>
                        </div>
                    </div>





                    <div className='border-1 border-gray-300 shadow-sm p-2 rounded-sm '>

                        <div className='  flex justify-between items-center'>

                            <div>
                                <span className='text-[15px] font-bold m-0 '>Physics lab Report</span>
                            <p className='text-gray-400 m-0'>Physics 101</p>
                            </div>

                            <div className='rounded-2xl '>
                                <button className='bg-red-600 text-white !rounded-lg px-2 py-0.5 hover:bg-red-500 hover:shadow-sm'>View</button>
                            </div>
                        </div>

                        <div>
                            <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, officia!</p>
                        </div>

                        <div className='flex justify-items-start items-center gap-3.5'>
                            <span className='text-gray-600 '>
                                Cal Due: Oct 18, 2025
                            </span>

                            <span className='text-gray-600 '>
                                clo 11:59 PM
                            </span>

                            <span className='text-gray-600 '>
                                ass 100 points
                            </span>
                        </div>


                        <div className='p-2 flex gap-2'>
                            <button className='bg-black text-white p-1 px-2 font-semibold !rounded-lg'>
                                Submit Assignment
                            </button>

                            <button className='bg-gray-300 px-1 !rounded-sm hover:text-gray-500'> 
                                View Details
                            </button>
                        </div>
                    </div>




                    
                </div>



                
            </div>

        </section>
    )
}

export default Assignments
