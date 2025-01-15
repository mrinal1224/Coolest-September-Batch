import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const cardData = [
    { title: "Laptops", description: "This is a Macbook Pro M3" },
    { title: "Apple Iphone", description: "This is an Apple Iphone 16" },
    { title: "Nike Shoes", description: "These are Air max Shoes." },
    { title: "Sunglasses", description: "These are RayBan Sunglasses" },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {cardData.map((item)=> {
         return <Card cardTitle={item.title} cardDescription={item.description} />
        })}
      </div>
    </div>
  );
}

export default App;
