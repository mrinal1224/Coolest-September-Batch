import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { GetAllMovies } from "../../apiCalls/movies";

function MovieList() {

  const [movies , setMovies] = useState([])


  const getData = async () => {
    const response = await GetAllMovies();
    const allMovies = response.data;
    setMovies(allMovies)
    console.log(allMovies);
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster",
      key: "1",
      render: (url) => <img src={url} style={{width:80, height:100}}/>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (text) => <p>{text} mins</p>
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Language",
      key: "language",
      dataIndex: "language",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={movies} />;
    </div>
  );
}

export default MovieList;
