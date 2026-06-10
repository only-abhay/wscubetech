function Zomato(props){
    return(
        <div class="card">
  
  <div className="img-box">
    <img src={props.src} alt="Cafe Image"/>

    <span className="tag">Promoted</span>

    <div className="offer">
     {props.km<1 ? " ⚙ Flat 15% OFF":"⚙ Flat 5% OFF"}
    </div>
  </div>

  <div className="content">
    <div className="title-row">
      <h3>{props.name}</h3>
      <span className="rating"style={{
        background:props.rating<4 ? "red": "green"
      }}> {props.rating}★</span>
    </div>

    <p className="desc">{props.area}</p>

    <div className="bottom-row">
      <span>{props.price}</span>
      <span>{props.km}km</span>
    </div>

    <p className="location">{props.area2}</p>
  </div>

</div>
    )
}
 export default Zomato