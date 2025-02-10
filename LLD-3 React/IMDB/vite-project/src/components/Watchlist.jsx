import React, { useEffect, useState } from "react";
import genreids from "../utlities/genre.js";

function Watchlist({ watchlistData, setWatchlistData }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  useEffect(() => {
    let temp = watchlistData.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlistData]);

  // 🔥 Function to Handle Deletion of Movie
  const handleDelete = (movieId) => {
    const updatedWatchlist = watchlistData.filter((movie) => movie.id !== movieId);
    setWatchlistData(updatedWatchlist);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Genre Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 my-4">
        {genreList.map((genre) => (
          <button
            key={genre}
            onClick={() => setCurrGenre(genre)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
              currGenre === genre ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[300px] p-3 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-4 text-center">Movie</th>
              <th className="px-6 py-4 text-center">Ratings</th>
              <th className="px-6 py-4 text-center">Popularity</th>
              <th className="px-6 py-4 text-center">Genre</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {watchlistData
              .filter((movie) => currGenre === "All Genres" || genreids[movie.genre_ids[0]] === currGenre)
              .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
              .map((movie) => (
                <tr key={movie.id} className="border-b hover:bg-gray-100 transition-all duration-300">
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <img
                      className="h-16 w-24 rounded-lg shadow-md"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                    <span className="font-medium">{movie.title}</span>
                  </td>
                  <td className="px-6 py-4 text-center">{movie.vote_average}</td>
                  <td className="px-6 py-4 text-center">{movie.popularity}</td>
                  <td className="px-6 py-4 text-center">{genreids[movie.genre_ids[0]]}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleDelete(movie.id)}
                      className="px-3 py-1 text-sm font-semibold bg-red-500 text-white rounded-md transition-all duration-300 hover:bg-red-600"
                    >
                      Delete ❌
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
