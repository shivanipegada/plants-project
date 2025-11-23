import "../components/Footer.css"
import plant from "../assets/plant.png"


function Footer(){

    return(
        <>

        <div className="footer-container" id="contact">

            <div className="footer-section-1">

                <div className="img-container">
                 <img src={plant} alt=""  className="footer-img" />
                 <h3 className="footer-h3">FloraVision.</h3>
                </div>
             
                 <p className="footer-p">"From lush indoor greens to vibrant <br /> outdoor blooms, our plants are crafted to <br /> thrive and elevate your living environment."</p>
            </div>

            <div className="quick-links">
                <a href="#earth-exhale-home" className="link">Home</a>
                <a href="#top-selling-plants" className="link">Type's Of Plants</a>
                <a href="#contact" className="link">Contact</a>
                <a href="" className="link">Privacy</a> 
            </div>

            <div className="footer-section-2">

                <h4>For Every Update</h4>

                 
                 <form action=""  className="input-container">
                  
                  <input type="email" name="email" placeholder="Enter Email" className="email" required />
                  <button type="submit" className="footer-btn">SUBSCRIBE</button>

                 </form>

               <p class="footer-p1">FloraVision © all right reserve</p>

            </div>


        </div>
        </>
    )

}

export default Footer


{/* <div className="input-container">
                <input type="email" placeholder="Enter Email" className="email" />
                <button className="footer-btn">SUBSCRIBE</button>
               </div> */}