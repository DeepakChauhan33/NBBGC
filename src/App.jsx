
import "bootstrap/dist/css/bootstrap.min.css";
import Slidebar from "./Components/Slidebar";
import Navbar from "./Components/Navbar";
import Account from "./Pages/Account";




function App() {

  return (
    <>

      <div className="flex">
        <Slidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <Account />
        </div>
      </div>


    </>
  )
}

export default App
