import Navbar from "./components/Navbar"
import Plants from "./components/Plants"
import plantsData from "./jsondata/plantsdata"
import Reviews from "./components/Reviwes"
import reviews from "./jsondata/reviewsdata"

// import Reviews from "./components/Reviews";
// import reviewsData from "./jsondata/reviewsdata";
import Footer from "./components/Footer"

function App() {
  return(
    <>
    <Navbar/>
    <Plants/>
    <Reviews/>
    <Footer/>
    </>
  )
  
}

export default App