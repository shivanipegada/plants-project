import { useState } from "react";
import plant from "../assets/plant.png"
import searchIcon from "../assets/search.png";
import parcel from "../assets/parcel.png"
import menu from "../assets/menus.png"
import play from "../assets/play.png"
import aglaomenaplant from "../assets/agalonemaplant.png"
import rosegold from "../assets/rosegold.png"
import rosegoldplant2 from "../assets/rosegoldplant2.png"


function Navbar(){
    const [open, setOpen] = useState(false);
  return (
    <>
      <header className="nav-header">
      <nav className="container">
        <div className="nav-left">
          <img src={plant} alt="Logo" className="logo" />
          <h2 className="title">Floravision</h2>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          <span className={open ? "bar rotate1" : "bar"}></span>
          <span className={open ? "bar hide" : "bar"}></span>
          <span className={open ? "bar rotate2" : "bar"}></span>
        </button>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li><a href="#">Home</a></li>
          {/* <li><a href="#">Plant Type</a></li> */}

            <li className="dropdown">
           <button className="drop-btn">Plant Type ▾</button>
           <ul className="dropdown-menu">
           <li><a href="#">Indoor Plants</a></li>
           <li><a href="#">Outdoor Plants</a></li>
           <li><a href="#">Succulents</a></li>
          <li><a href="#">Decor Plants</a></li>
         </ul>
         </li>

          <li><a href="#">More</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href=""><img src={searchIcon} alt="" className="nav-icon" /></a></li>
          <li><a href=""><img src={parcel} alt="" className="nav-icon" /></a></li>
          <li><a href=""><img src= {menu} alt="" className="nav-icon" /></a></li>
        </ul>
      </nav>
    </header>

     <div className="content-container">

       <div className="sub-container-1">
      <div className="earth-exhale">
        <h1 className="h1">Earth's Exhale</h1>
          <p className="p">“Earth Exhale” symbolizes the purity and vitality of the Earth's natural </p>
           <p className="p">environment. It reflects how the planet sustains life.</p> 
          <div className="button-row ">
            <button className="btn">Buy Now</button>
            {/* <button className="btn-outline">live stream...</button> */}
            <button className="button-1"> <img src={play} alt="" className="play-icon" />Live Demo...</button>
          </div>
      </div>

      <div className="image-container">
        <img src={aglaomenaplant} alt="" className="aglaomenaplant-image"/>
        <p className="plant">Indoor plant</p>
        <h3 className="plant">aglaonema plant</h3>
        <button className="buy-btn">Buy Now</button>
      </div>
      
       </div>



      <div className="rating-container">

        <div className="sub-content">
         <img src="https://t3.ftcdn.net/jpg/00/64/32/42/360_F_64324283_K9XR3OkMqSs4cHIGLTvPHn5MSokeEPkP.jpg" alt="" className="child-image" />
        <h5>Ronnie Hamil</h5>
        </div>
        <p className="stars-p"> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <p className="rating-p">  I can't express how thrilled I am with my <br />new natural plants!
          They bring such a <br />fresh and vibrant energy to my home.</p>
      </div>
      

       
      <div className="trendy-plants">

        <h1 className="trendy-plants-h1">Our Trendy Plants</h1>

        <div className="trendy-plant-container">
          <div className="rosegold-plant-img">
            <img src={rosegold} alt="" className="rosegold-image" />
          </div>
         
         <div className="rosegold-plant-content">
            <h2 className="rosegold-h2">For Your Desks Decorations</h2>
            <p className="content">I recently added a beautiful desk decoration plant to my workspace, and it <br/> has made such a positive difference!</p>
            <h2>Rs.599/-</h2>
            <div className="trendy-plants-btns">
             <button className="explore-btn">Explore</button>
            <button className="parcel-btn1"><img src={parcel} alt="" className="parcel-img1"  /></button>
            </div>
            
         </div>

        </div>


          <div className="trendy-plant-container">
          <div className="rosegold-plant-img">
            <img src={rosegoldplant2} alt="" className="rosegold-image" />
          </div>
         
         <div className="rosegold-plant-content">
            <h2 className="rosegold-h2">For Your Desks Decorations</h2>
            <p className="content">The greenery adds a touch of nature and serenity to my desk, making it feel <br/> more inviting and calming</p>
            <h2>Rs.399/-</h2>
            <div className="trendy-plants-btns">
             <button className="explore-btn">Explore</button>
            <button className="parcel-btn1" ><img src={parcel} alt="" className="parcel-img1"  /></button>
            </div>
            
         </div>

        </div>



      </div>








     </div>



      
   

    </>
  )
}



export default Navbar 