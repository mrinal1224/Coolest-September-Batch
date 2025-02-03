import "./App.css";
import Parent1 from "./components/Parent1";

import { ParkContext } from "./components/ParkContext";


function App() {
  const parkInfo = {
    parkName: "Imagica Amusement park",

    rollerCoaster: "Must be taller than 48 inches",
    waterSlide: "You must know how to Swim",
    merryGoRound: "Children must have age less than 10",

    ticketForRollerCoaster: () => {
      return "RollerCoaster Started";
    },

    ticketforWaterSlide: () => {
      return "WaterSlide Started";
    },

    ticketForMerryGoRound: () => {
      return "Merry go Round Started";
    },
  };

  return (
    <>
    <ParkContext.Provider value={parkInfo}>
    <Parent1/>
    </ParkContext.Provider>
    </>
  );
}

export default App;