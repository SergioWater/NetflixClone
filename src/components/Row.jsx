import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  //Getting our movies using axios then putting it into our movie State
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => {
            return (
                <Movie key={id} item={item}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
