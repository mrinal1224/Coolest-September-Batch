import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieCard({ movieObject }) {
  const { watchlist, handleAddToWatchList } = useContext(MovieContext);

  // Check if movie is in the watchlist
  const isInWatchlist = watchlist.some((movie) => movie.id === movieObject.id);

  return (
    <div className="relative group w-[220px] h-[350px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
      {/* Movie Poster */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>

      {/* Watchlist Toggle Button */}
      <button
        onClick={() => handleAddToWatchList(movieObject)}
        className={`absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-80 backdrop-blur-md shadow-md text-xl transition-all duration-300 ${
          isInWatchlist ? "text-red-500" : "text-gray-700"
        } hover:scale-110`}
      >
        {isInWatchlist ? "❤️" : "🤍"}
      </button>

      {/* Movie Title */}
      <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-60 text-white py-3">
        <h5 className="text-lg font-semibold">{movieObject.title}</h5>
      </div>
    </div>
  );
}

export default MovieCard;