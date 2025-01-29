
import React from "react";


function Pagination({pageNumber , nextFn , previousFn}) {

  return (
    <div
      className="bg-gray-400 h-[50px] w-full
      mt-8 flex justify-center gap-4"
    >
      <div onClick={previousFn} className="px-8">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNumber}</div>
      <div onClick={nextFn} className="px-8">
        
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
