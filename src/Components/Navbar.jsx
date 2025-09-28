// import React from 'react'

// const Navbar = () => {
//   return (
//     <>

//       <header className="hidden md:flex h-24 m-0.5 z-50 border-2 w-auto justify-between items-center px-4 top-0">

//         <div className='border-2'>
//           <p>Account</p>
//         </div>


//         <div className='flex justify-center items-center gap-3 p-2'>
//           <p>Good Afternoon <br /> <strong>Deepak</strong></p>

//           <div className='h-15 w-15 rounded-full border-[1px] p-0.5'>
//             <img 
//             className='h-full w-full object-cover '
//             src="https://cdn-icons-png.freepik.com/512/843/843290.png" alt="img" />
//           </div>
//         </div>



//       </header>

//     </>
//   )
// }

// export default Navbar




import React from "react";

const Navbar = () => {
  return (
    <header className="hidden md:flex h-20 border-b items-center justify-between px-6 bg-white shadow-md sticky top-0 z-40">
      <p className="text-lg font-medium">Account</p>

      <div className="flex items-center gap-3">
        <p className="text-sm">
          Good Afternoon <br /> <strong>Deepak</strong>
        </p>
        <div className="h-12 w-12 rounded-full border overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://cdn-icons-png.freepik.com/512/843/843290.png"
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
