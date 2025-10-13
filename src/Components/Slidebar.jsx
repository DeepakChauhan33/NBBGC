





import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, BookOpen, GraduationCap, Calendar, FileText, LogOut, ChevronRight } from "lucide-react";

const SidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform bg-gray-100 border-r border-1 border-gray-200 w-60 z-40 transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex flex-col h-full justify-end-safe">
          {/* Logo */}
          <div className="flex items-center justify-between px-4 py-3 shadow-sm">

            <div className="flex h-15 w-15 items-center gap-2">
              <img src="https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/08-symmetry.jpg" alt="" />
            </div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          {/* Menu */}
          <nav className=" prose flex-1 overflow-y-auto mt-3 text-black">
            <span className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Main Menu
            </span>
            <ul className="mt-2 space-y-1">


              {/* DASHBOARD ELEMENTS */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <Home size={18} />
                Dashboard
              </NavLink>




              {/* COURSES ELEMENTS */}
              <NavLink
                to="/courses"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                < BookOpen size={18} />
                Courses
              </NavLink>



              {/* GRADES ELEMENTS */}
              <NavLink
                to="/grades"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <GraduationCap size={18} />
                Grades
              </NavLink>



              {/* SCHEDULE ELEMENTS */}
              <NavLink
                to="/schedules"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <Calendar size={18} />
                Schedule
              </NavLink>



              {/* ASSIGNEMENTS */}
              <NavLink
                to="/assignments"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <FileText size={18} />
                Assignments
              </NavLink>


              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <Home size={18} />
                Dashboard
              </NavLink>




              {/* COURSES ELEMENTS */}
              <NavLink
                to="/courses"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                < BookOpen size={18} />
                Courses
              </NavLink>



              {/* GRADES ELEMENTS */}
              <NavLink
                to="/grades"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <GraduationCap size={18} />
                Grades
              </NavLink>



              {/* SCHEDULE ELEMENTS */}
              <NavLink
                to="/schedules"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <Calendar size={18} />
                Schedule
              </NavLink>



              {/* ASSIGNEMENTS */}
              <NavLink
                to="/assignments"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 font-medium rounded-md hover:bg-gray-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }`
                }
              >
                <FileText size={18} />
                Assignments
              </NavLink>
            </ul>
          </nav>

          {/* User Info */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                A
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700">
                  Alex Johnson
                </p>
                <p className="text-xs text-gray-500">Junior Year</p>
              </div>
            </div>
            <button className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-sm text-red-500 font-medium hover:bg-red-100 rounded-md">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </aside >

      {/* Overlay (for mobile) */}
      {
        sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )
      }

      {/* Main Content Area */}
      <div className=" flex flex-col">
        {/* Header */}
        <header className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 shadow-sm z-10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-700"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-gray-700">
              Dashboard
            </h2>
          </div>

          {/* <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-800">
              <ChevronRight size={20} />
            </button>
            <div className="h-8 w-8 bg-blue-200 rounded-full flex items-center justify-center font-bold text-gray-700">
              A
            </div>
          </div> */}
        </header>

      </div>
    </>
  );
};

export default SidebarLayout;
