import React, { useState } from "react";

function Watchlist({ watchlistData }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search)
  }

  return (
    <>
      <div className="flex justify-center my-10 w-full">
        {/* genre Filter */}

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
              return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj) => {
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
                  <td className="px-6 py-4 text-center">Action</td>
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
