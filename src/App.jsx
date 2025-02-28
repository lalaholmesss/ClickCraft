import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import ProfileSetUp from "./components/ProfileSetUp/ProfileSetUp";
import TopPortfolios from "./components/TopPortfolios/TopPortfolios";
function App() {

    return(
      <div>
        <Navbar/>
        <LandingPage />
        <ProfileSetUp />
        <TopPortfolios />
      </div>
    )
}

export default App
