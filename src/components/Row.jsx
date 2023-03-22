import axios from "axios";
import React, { useState, useEffect } from "react";
import request from "../Request";



const Row = ({ title, fetchURL }) => {

    const [movies, setMovies] = useState([])

    useEffect( () => {
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={'slider'}>
            {movies.map((item,id) =>{
                return(
                    <div className="w-[160px] sm:w[200px] md:w[240px] inline-block cursor-pointer relative p-2">
                        <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                    <div className="absolte top-0 left-0 w-full h-fll hover:bg-black/80 opacity-0 hover:opacity-100 text-white"></div>
                    <p>{item?.title}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Row;
