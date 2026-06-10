function Carding(pups){
 return(
<div className="card">
 
  <div className="card-img">
    <img src={pups.src} alt="restaurant"/>
    <div className="overlay">
      <h2>{pups.name}</h2>
      <div className="rating">⭐ 4.2</div>
    </div>
  </div>

  <div className="card-content">
    <div className="row">
      <p>{pups.area}</p>
      <p className="price">{pups.price}</p>
    </div>

    <div className="row">
      <p className="location">{pups.area2}</p>
      <p className="distance">{pups.km}km</p>
    </div>

    <div className="offer">
     {pups.km<1 ? " Flat 10% off on walk in":" Up to 10% off with bank offers"}
    </div>

    <p className="extra"> {pups.km<1 ? " Up to 10% off with bank offers":"Get extra 10% off using SAVE150UPI"}</p>
  </div>

</div>
 )
}
export default Carding