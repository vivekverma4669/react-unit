import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";


const MovieList = () => {
  const[loading, setLoading] = useState(true);
  const[data,setData]= useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [filterOption, setFilterOption] = useState("default");
  const getData = async()=>{

    try {
      setLoading(true);
      let url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`;

      if (sortOption !== "default") {
        url += `?_sort=year&_order=${sortOption}`;
      }

      if (filterOption !== "default") {
        url += sortOption !== "default" ? `&type=${filterOption}` : `?type=${filterOption}`;
      }

      let res = await fetch(url);
      let responseData = await res.json();
      setData(responseData);
      setLoading(false);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
    }
    
    useEffect(()=>{
      getData();
    },[sortOption,filterOption]);

    const handleSortChange = (event) => {
      let para=event.target.value;
      setSortOption(para);
    };
  
    const handleFilterChange = (event) => {
      let para=event.target.value;
      setFilterOption(para);
    };

  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort" value={sortOption} onChange={handleSortChange}>
        <option value="default">--</option>
        <option value="asc">Oldest first</option>
        <option value="desc">Newest first</option>


        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter" value={filterOption} onChange={handleFilterChange}>
          <option value="default">--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div data-testid="movie-container">
          {data.map((item) => (
            <MovieCard key={item.imdbID} title={item.title} year={item.year} imdbID={item.imdbID} type={item.type} rating={item.rating} poster={item.poster} />
          ))}
        </div>
      )}
      </div>
  );
};

export default MovieList;
