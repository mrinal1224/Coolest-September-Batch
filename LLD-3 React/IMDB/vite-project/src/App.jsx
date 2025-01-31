import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import MovieRecommendation from "./components/MovieRecommendation";
import Movies from "./components/Movies";
import { useState } from "react";

function App() {
  const [watchlist , setWatchList] = useState([])

  const handleAddToWatchList = (movieObj)=>{
      let updatedWatchList = [...watchlist, movieObj]
      setWatchList(updatedWatchList)
      console.log(updatedWatchList)

      
  }





  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="space-y-10 flex flex-wrap">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner /> <Movies addToWatchList={handleAddToWatchList}/>
                </>
              }
            />

            <Route path="/watchlist" element={<Watchlist watchlistData={watchlist}  />} />

            <Route path="/recommend" element={<MovieRecommendation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
