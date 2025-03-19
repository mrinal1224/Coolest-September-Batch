import React, { useEffect, useState } from "react";
import { GetAllMovies } from "../apiCalls/movies";
import { Card , Flex } from "antd";

const { Meta } = Card;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const response = await GetAllMovies();
    console.log(response);
    setMovies(response.data);
  }, []);

  return (
 
    <div  className="flex">
 
      {movies &&
        movies.map((movieObj) => (
       <div className="flex me-3 ">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src={`${movieObj.poster}`}
              />
            }
          >
            <Meta title={`${movieObj.title}`} />
          </Card>
          </div>
        ))}
    </div>


  );
};

export default Home;
