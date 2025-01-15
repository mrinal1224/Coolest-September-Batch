import Card from "./components/Card";
import Navbar from "./components/Navbar"


function App() {
  return <div >
            <Navbar/>
            <div style={{display:'flex' , justifyContent:'space-evenly'}} >
            <Card cardData="Laptops" />
            <Card cardData="Mobile Phones" />
            <Card cardData='Shoes' />
            <Card cardData='Clothes'/>
            </div>
         </div>;
}

export default App;
