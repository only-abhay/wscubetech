import Zomato from './Zomato.jsx'
function App() {
  const array=[{
    title:"B&B-Brew And Brunch",
    area:"Cafe, Coffee, Beverages,",
    area2:"O-12 Ashok Marg,",
    rating:"4.5",
    price:"₹1,000 for two",
    km:"0.8",
    src:"./public/car1.avif",
    offer:"10",},
   {
     title:"Handi Restaurant",
    area:"North Indian, BBQ",
    area2:"Opposite GPO, ",
    rating:"3.8",
    price:"₹1,600 for two",
    km:"0.8",
    src:"./public/car2.avif",
    offer:"10",
   },
   {
    title:"B&B-Brew And Brunch",
    area:"Cafe, Coffee, Beverages,",
    area2:"O-12 Ashok Marg,",
    rating:"4.5",
    price:"₹1,000 for two",
   km:"0.8",
    src:"./public/car3.avif",
    offer:"10",
   },
    {
    title:"B&B-Brew And Brunch",
    area:"Cafe, Coffee, Beverages,",
    area2:"O-12 Ashok Marg,",
    rating:"4.5",
    price:"₹1,000 for two",
   km:"0.8",
    src:"./public/car1.avif",
    offer:"10",
   },
]
  return (
    <div className="maining">
      <h1>Restaurants in Jaipur</h1>
     <div className='conn'>
  {
    array.map(
      (array,index)=>{
        return(
          <Zomato key={index} name={array.title} area={array.area} area2={array.area2} rating={array.rating} price={array.price} km={array.km} src={array.src} offer={array.offer} />
        )
      }
    )
  }

     </div>
     </div>
  )
}

export default App
