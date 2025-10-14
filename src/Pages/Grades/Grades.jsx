import React from 'react'

import { IoSearch } from "react-icons/io5";


const Course = () => {
  return (
    <>

      <section className='space-y-3.5'>
        <div className=''>
          <h3 className=''>
            Acadmeic Performance
          </h3>

          <span className='text-gray-600 '>
            All your grades and examination performance
          </span>
        </div>

        <div className='grid grid-cols-3 p-2 gap-5 '>

          <div className=' rounded-sm border border-gray-600 p-1 space-y-0 flex-grow-1'>
            <h5>
              Current CGP
            </h5>

            <div className='p-2 flex flex-col'>
              <div className='flex'>
                <span className='font-bold'>5.8</span> / <p>10</p>
              </div>

              <p>Current Semester</p>
            </div>

            <div>



              <div className='w-full h-4 overflow-hidden rounded-lg bg-gray-300'>
                <div className='w-[46%] bg-red-400 text-center text-red-400 '>.</div>
              </div>
            </div>
          </div>

          <div className=' rounded-sm border border-gray-600 p-1 space-y-0 flex-grow-1'>
            <h5>
              Current CGP
            </h5>

            <div className='p-2 flex flex-col'>
              <div className='flex'>
                <span className='font-bold'>5.8</span> / <p>10</p>
              </div>

              <p>Current Semester</p>
            </div>

            <div>



              <div className='w-full h-4 overflow-hidden rounded-lg bg-gray-300'>
                <div className='w-[76%] bg-green-400 text-center text-red-400 '>.</div>
              </div>
            </div>
          </div>

          <div className=' rounded-sm border border-gray-600 p-1 space-y-0 flex-grow-1'>
            <h5>
              Current CGP
            </h5>

            <div className='p-2 flex flex-col'>
              <div className='flex'>
                <span className='font-bold'>5.8</span> / <p>10</p>
              </div>

              <p>Current Semester</p>
            </div>

            <div>



              <div className='w-full h-4 overflow-hidden rounded-lg bg-gray-300'>
                <div className='w-[58%] bg-yellow-400 text-center text-red-400 '>.</div>
              </div>
            </div>
          </div>
        </div>


        {/* See Result */}

        <div className='shadow-md rounded-2xl p-3'>
          <div className='flex p-2 gap-2 '>
            <p className=' p-2 font-extrabold text-[20px]'>< IoSearch /></p>

            <span className=' p-1 text-[16px]'>View Result</span>
          </div>

          <div className='grid grid-cols-2  gap-1.5 p-2'>

            <div className=' p-2 '>
              <p className='mb-3 font-medium text-gray-600'>Select Semester</p>

              <div className='rounded-lg'>
                <select className='w-full text-black p-2 rounded-md bg-gray-200 shadow-md  '>
                  <option value="Err">Choose Semester </option>
                  <option value="one">1</option>
                  <option value="one">2</option>
                  <option value="one">3</option>
                  <option value="one">4</option>
                  <option value="one">5</option>
                  <option value="one">6</option>
                  <option value="one">7</option>
                  <option value="one">8</option>
                </select>
              </div>
            </div>


            <div className=' p-2 '>
              <p className='mb-3 font-medium text-gray-600'>Select Semester</p>

              <div className='rounded-lg '>
                <select className='w-full text-black p-2 rounded-md bg-gray-200 shadow-md  '>
                  <option value="Err">Choose Semester </option>
                  <option value="one">1</option>
                  <option value="one">2</option>
                  <option value="one">3</option>
                  <option value="one">4</option>
                  <option value="one">5</option>
                  <option value="one">6</option>
                  <option value="one">7</option>
                  <option value="one">8</option>
                </select>
              </div>
            </div>

          </div>

          <button className='w-full p-2 bg-gray-600 text-center !rounded-lg hover:bg-gray-700 hover:text-white overflow-hidden text-gray-100 font-bold '>
            View Result
          </button>

        </div>

      </section>
    </>
  )
}

export default Course
