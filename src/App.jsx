import "bootstrap/dist/css/bootstrap.min.css";
import Slidebar from "./Components/Slidebar";
import Navbar from "./Components/Navbar";
import Account from "./Pages/Account";
import SubInfo from "./Pages/SubInfo";
import PayFee from "./Pages/PayFee";
// import Examination from "./Pages/Examination";
// import Services from "./Pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row h-screen w-full">
        
        <Slidebar />

        <div className="flex flex-col flex-1 md:ml-[22%] w-full overflow-hidden">
          <Navbar />

          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              {/* <Route path="/" element={<Account />} /> */}
              <Route path="/account" element={<Account />} />
              <Route path="/book-subject" element={<SubInfo />} />
              <Route path="/pay-fee" element={<PayFee />} />
              {/* <Route path="/examination" element={<Examination />} />
              <Route path="/services" element={<Services />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
