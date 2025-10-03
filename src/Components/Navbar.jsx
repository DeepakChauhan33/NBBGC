
import React from "react";

const Navbar = () => {
  return (
    <header className="hidden w-full md:flex h-20 border-b items-center justify-between px-6 bg-white shadow-md sticky top-0 z-40">
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
