import React from "react";

function Watchlist() {
  return (
    <>
      <div>
        {/* genre Filter */}

        {/* {search Bar} */}
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
            <tr className="border-b-2">
              <td className="px-6 py-4 flex items-center space-x-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src="https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg"
                  alt="Movie"
                />
                <div>Movie Title</div>
              </td>
              <td className="px-6 py-4 text-center">10</td>
              <td className="px-6 py-4 text-center">10</td>
              <td className="px-6 py-4 text-center">Action</td>
              <td className="px-6 py-4 text-center text-red-500 cursor-pointer">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
