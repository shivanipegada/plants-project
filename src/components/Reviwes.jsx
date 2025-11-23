import reviewsData from "../jsondata/reviewsdata";
import "../components/Reviews.css"
import aglaomenaplant from "../assets/agalonemaplant.png"

function Reviews(){
    return(

        <>
       <div className="heading" id="reviews">
         <h1 className="reviews-heading">Customer Reviews</h1>
       </div>

      <div className="reviews-container">
        {reviewsData.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-top">
              <img src={review.image} alt={review.name} className="review-img" />
              <h3 className="review-name">{review.name}</h3>
            </div>

            <div className="review-texts">
              <p className="review-p">{review.description1}</p>
              <p className="review-p">{review.description2}</p>
              <p className="review-p">{review.description3}</p>
            </div>

            <div className="review-rating">
              {"⭐".repeat(5)} 
            </div>
          </div>
        ))}
      </div>

        
           
            <div className="heading" id="o2-plants">
         <h1 className="besto2-heading">Our Best O2</h1>
       </div>
       <div className="besto2-container">
                <div className="rosegold-plant-img">
                  <img src={aglaomenaplant} alt="" className="rosegold-image" />
                </div>
               
               <div className="besto2-plant-content">
                  <h2 className="besto2-plant-h2">We Have Small And Best O2 Plants <br />Collection’s</h2>
                  <p className="besto2-content">Oxygen-producing plants, often referred to as "O2 <br /> plants," are those that release oxygen into the <br /> atmosphere through the process of photosynthesis.</p>
                  <p className="besto2-content">Many plants can help filter out pollutants and toxins <br />from the air, such as formaldehyde, benzene, and <br /> trichloroethylene. This makes the air cleaner and <br /> healthier to breathe.</p>
                  <div className="besto2-plants-btns">
                   <a href="#trending"><button className="explore-btn">Explore</button></a>
                  {/* <button><img src={parcel} alt="" className="parcel-btn" /></button> */}
                  </div>
                  
               </div>
      
              </div>

        </>

    )
}

export default Reviews






