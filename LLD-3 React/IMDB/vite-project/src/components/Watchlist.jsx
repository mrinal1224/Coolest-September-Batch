import React, { useEffect, useState } from "react";
import genreids from "../utlities/genre.js";

function Watchlist({ watchlistData }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre , setCurrGenre] = useState('All Genres')

  useEffect(() => {
    let temp = watchlistData.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });

    temp = new Set(temp);

    setGenreList(["All Genres", ...temp]);
  }, [watchlistData]);

  function handleFilter(genre){
    setCurrGenre(genre)
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  console.log(genreList);

  return (
    <>
      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-10 w-full">
        <input
          className="bg-gray-200 h-[3rem] w-[18rem] outline-none border border-slate-600"
          placeholder="Search Movies"
          type="text"
          onChange={handleSearch}
          value={search}
        ></input>
      </div>

      <div className="m-8 w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="border border-gray-200 bg-gray-200">
            <tr>
              <th className="px-6 py-4 text-center">Name</th>
              <th className="px-6 py-4 text-center">Ratings</th>
              <th className="px-6 py-4 text-center">Popularity</th>
              <th className="px-6 py-4 text-center">Genre</th>
              <th className="px-6 py-4 text-center">Delete Movies</th>
            </tr>
          </thead>
          <tbody>
            {watchlistData.filter((movieObj)=>{
              if(currGenre=='All Genres'){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currGenre // Horror
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="px-6 py-4 flex items-center space-x-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt="Movie"
                      />
                      <div>{movieObj.title}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {movieObj.vote_average}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {movieObj.popularity}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {genreids[movieObj.genre_ids[0]]}
                    </td>
                    <td className="px-6 py-4 text-center text-red-500 cursor-pointer">
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
