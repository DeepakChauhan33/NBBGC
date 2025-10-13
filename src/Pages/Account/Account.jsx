
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import Alert_MSg from "../../Components/Alert_MSg";



const Account = () => {
  return (
    <div className="space-y-3">

      <Alert_MSg />
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

      {/* Activity and Deadlines */}


      <div className=" p-4 gap-4 flex ">



        {/* LEFT BOX */}

        <div className="w-[50%] p-4 space-y-3 rounded-md shadow-xl">

          <h5 className="font-semibold mb-5">Upcoming Deadlines</h5>

          <div className="border-b-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold">
                Physics Lab Report
              </span>

              <p className="text-gray-500">
                Physics 101
              </p>
            </div>

            <div>
              <span className="p-2 bg-red-500 text-white font-semibold text-[12px] rounded-xl">
                Oct 18, 2025
              </span>
            </div>
          </div>


          <div className="border-b-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold">
                Physics Lab Report
              </span>

              <p className="text-gray-500">
                Physics 101
              </p>
            </div>

            <div>
              <span className="p-2 bg-red-500 text-white font-semibold text-[12px] rounded-xl">
                Oct 18, 2025
              </span>
            </div>
          </div>



          <div className="border-b-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold">
                Physics Lab Report
              </span>

              <p className="text-gray-500">
                Physics 101
              </p>
            </div>

            <div>
              <span className="p-2 bg-red-500 text-white font-semibold text-[12px] rounded-xl">
                Oct 18, 2025
              </span>
            </div>
          </div>
        </div>


      {/* RIGHT BOX */}

        <div className="w-[50%] p-4 space-y-3 rounded-md shadow-xl">

          <h5 className="font-semibold mb-5">Recent Activity</h5>

          <div className="border-b-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold">
                Submitted Assignment
              </span>

              <p className="text-gray-500">
                CSS
              </p>
            </div>
            

            <div>
              <span className="text-gray-500 font-semibold">
                6 Day ago
              </span>
            </div>
          </div>


          <div className="border-b-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold">
                Result Posted
              </span>

              <p className="text-gray-500">
                Sem-2
              </p>
            </div>

            <div>
              <span className="text-gray-500 font-semibold">
                1 Week ago
              </span>
            </div>
          </div>



          <div className="border-b-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold">
                New announcement
              </span>

              <p className="text-gray-500">
                Fest
              </p>
            </div>

            <div>
              <span className="text-gray-500 font-semibold">
                3 Week ago
              </span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Account;
