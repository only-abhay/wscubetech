 import Carding from './Carding.jsx'
function App() {
  return (
    <div className="cont">
   <Carding name="The Boss Jaipur" src="./public/cardimg1.avif" area="Continental .Asian" area2="The Grand Walk,Gandhi Nagar, Jaipur" price="2200 for two" km="4.7"/>
   <Carding name="Dine & Palm" src="./public/cardimg2.avif"  area="North Indian.Chaat" area2="Vaishali Nagar,Jaipur" price="700 for two" km="0.4"/>
   <Carding name="Hari Mahal Palace" src="./public/cardimg3.avif"  area="Continental .North Indian" area2="Lal Kothi,Jaipur" price="1000 for two" km="0.8"/>
   </div>
  )
}

export default App
