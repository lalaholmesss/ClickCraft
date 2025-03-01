import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import ProfileSetUp from "./components/ProfileSetUp/ProfileSetUp";
import TopPortfolios from "./components/TopPortfolios/TopPortfolios";
import  RecentUsers  from "./components/RecentUsers/RecentUsers";
import ReachOut from "./components/ReachOut/ReachOut";
import Footer from "./components/Footer/Footer";
function App() {

    return(
      <div>
        <Navbar/>
        <LandingPage />
        <ProfileSetUp />
        <TopPortfolios />
        <RecentUsers />
        <ReachOut />
        <Footer />
        </div>
    )
}

export default App
