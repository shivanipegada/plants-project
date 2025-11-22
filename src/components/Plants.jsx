import plantsData from "../jsondata/plantsdata"
import "../components/plants.css"
import parcel from "../assets/parcel.png"

function Plants(){
    return(

    <>

     <div className="plants-container">
       <h1 className="plants-heading">Our Top Selling Plants</h1>
        {plantsData.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.image} alt={plant.name} className="plant-img" />

            <h3 className="plant-h3">{plant.name}</h3>

            <p className="plant-p">{plant.description1}</p>
            <p className="plant-p">{plant.description2}</p>
            <p className="plant-p">{plant.description3}</p>

            <div className="price-btn">
                <h4>Rs. {plant.price}/-</h4>
               <button className="parcel-btn"><img src={parcel} alt="" className="parcel-img" /></button>
             </div>
           
          </div>
        ))}
      </div>
    </>

    )

}

export default Plants 






