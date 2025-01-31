import React from "react";

function MovieCard({ movieObject, finalAddtoWatchList, watchList }) {
  function doesContain() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObject.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="space-x-8 space-y-8">
      <div
        className="w-[200px] h-[40vh] bg-cover ml-8 rounded-lg "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
        }}
      >
        {doesContain(movieObject) ? (
          <div
            className="flex justify-center items-center"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => finalAddtoWatchList(movieObject)}
            className="flex justify-center items-center"
          >
            &#128525;
          </div>
        )}

        <h5 className="text-white text-center text-xl rounded-lg p-2 bg-gray-900/25 ">
          {movieObject.title}
        </h5>
      </div>
    </div>
  );
}

export default MovieCard;
