import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import MovieRecommendation from "./components/MovieRecommendation";
function App() {
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
                  <Banner /> <MovieCard />
                </>
              }
            />

            <Route path="/watchlist" element={<Watchlist />} />

            <Route path="/recommend" element={<MovieRecommendation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
