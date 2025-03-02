import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Portfolios from "./pages/Portfolios";
import Community from "./pages/Community";
import AboutUs from "./pages/AboutUs";
import { Routes, Route } from "react-router";

function App() {
    return(
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Portfolios" element={<Portfolios/>}/>
          <Route path="/Community" element={<Community/>}/>
          <Route path="/About" element={<AboutUs/>}/>
        </Routes>
        <Footer />
        </div>
    )
}

export default App
