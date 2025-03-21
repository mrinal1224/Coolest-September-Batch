import React, { useEffect } from "react";
import { Table } from "antd";
import { GetAllMovies } from "../../apiCalls/movies";


function MovieList() {

 
  const getData = async ()=>{
        const response = await GetAllMovies()
        const allMovies = response.data
        console.log(allMovies)
  }

  useEffect(()=>{
    getData()
  }, [])



  const columns = [
    {
        title: "Poster",
        dataIndex: "poster",
        key: "1",
        render: (text) => <a>{text}</a>,
      },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Genre",
      dataIndex: "Genre",
      key: "Genre",
    },
    {
      title: "Language",
      key: "Language",
      dataIndex: "Language",
    },
    {
      title: "Release Date",
      key: "Release Date",
    },
  ];
  const data = [
    {

    }
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
}

export default MovieList;
