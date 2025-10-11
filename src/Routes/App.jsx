import "bootstrap/dist/css/bootstrap.min.css";
import Slidebar from "../Components/Slidebar";
import Navbar from "../Components/Navbar";



import { Outlet } from "react-router-dom";

function App() {


  return (

    <>

      <div>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full h-20 z-30 flex items-center px-6 ml-54 ">
        <Navbar />
      </header>

      {/* Fixed Sidebar */}
      <aside className="fixed top-16 left-0 w-60 h-[calc(100vh-4rem)] border-r z-20 flex flex-col ">
          <Slidebar/>
        {/* Sidebar content */}
      </aside>

      {/* Display Area */}
      <main
        className=" p-8 min-h-screen"
        style={{
          marginLeft: "15rem",     // Sidebar width
          marginTop: "5rem",       // Header height
        }}
      >
        <Outlet />
      </main>
    </div>



    </>

  );
}

export default App;
