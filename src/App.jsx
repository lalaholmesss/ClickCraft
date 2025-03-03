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
          <Route path="/portfolios" element={<Portfolios/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
        <Footer />
        </div>
    )
}

export default App