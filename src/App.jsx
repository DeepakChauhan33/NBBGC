
// import "bootstrap/dist/css/bootstrap.min.css";
// import Slidebar from "./Components/Slidebar";
// import Navbar from "./Components/Navbar";
// import Account from "./Pages/Account";
// import { BrowserRouter, Route } from "react-router-dom";




// function App() {

//   return (
//     <>



//       <div className="flex flex-col h-full  justify-center items-center  md:flex lg:h-screen ">
//         <Slidebar />
//         <div className="flex flex-col flex-1 ml-[17%] w-auto overflow-hidden z-50">
//           <Navbar />
//           <Account />
//         </div>
//       </div>



//     </>
//   )
// }

// export default App



import "bootstrap/dist/css/bootstrap.min.css";
import Slidebar from "./Components/Slidebar";
import Navbar from "./Components/Navbar";
import Account from "./Pages/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row h-screen w-full">
        {/* Sidebar */}
        <Slidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1 md:ml-[22%] w-full overflow-hidden">
          <Navbar />

          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Account />} />
              {/* You can add more pages later */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

