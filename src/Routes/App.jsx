import "bootstrap/dist/css/bootstrap.min.css";
import Slidebar from "../Components/Slidebar";
import Navbar from "../Components/Navbar";

// import Examination from "./Pages/Examination";
// import Services from "./Pages/Services";

import { Outlet } from "react-router-dom";

function App() {


  return (

    <div className="flex flex-col md:flex-row h-screen w-full">

      <Slidebar/>

      <div className="flex flex-col flex-1 md:ml-[22%] w-full overflow-hidden">
        <Navbar/>

        <main className="flex-1 overflow-y-auto p-4">
          <Outlet/>
        </main>
      </div>
    </div>


    // <main className="h-screen flex  w-full ">
    //   <div className="flex  h-full fixed">
    //     <Slidebar />
        
    //   </div>

    // </main>



  );
}

export default App;
