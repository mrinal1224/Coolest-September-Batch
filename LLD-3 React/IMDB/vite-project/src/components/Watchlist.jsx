import React from "react";


function Watchlist() {
  return (
    <>
      <div>
        {/* genre Filter */}

        {/* {search Bar} */}
      </div>

      <div className='m-8'>
        <table className=''>
          <thead className='border border-gray-200 rounded-lg bg-gray-200'>
            <tr className="flex justify-evenly">
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src='https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg'/>
                <div className='mx-10'>Movie Title</div>
              </td>
              <td>10</td>
              <td>10</td>
              <td>Action</td>
              <td className='text-red-500'>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;