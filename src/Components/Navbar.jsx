import React from 'react'

const Navbar = () => {
  return (
    <>

      <header className="hidden md:flex h-23 m-0.5 border-2 max-w-full justify-between items-center px-4">

        <div className='border-2'>
          <p>Account</p>
        </div>


        <div className='flex justify-center items-center gap-3 p-2'>
          <p>Good Afternoon <br /> <strong>Deepak</strong></p>

          <div className='h-15 w-15 rounded-full border-[1px] p-0.5'>
            <img 
            className='h-full w-full object-cover '
            src="https://cdn-icons-png.freepik.com/512/843/843290.png" alt="img" />
          </div>
        </div>



      </header>

    </>
  )
}

export default Navbar
