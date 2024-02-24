import React from "react";

const MovieCard = ({title, year,imdbID, type,poster,rating}) => {
  return <div data-testid="movie-card">
  <img src={poster} alt={title}/>
  <h2>{title}</h2>
  <h4>{year}</h4>
  <h6>ID: {imdbID} </h6>
  <p>Type: {type}</p>
  <p>Rating: {rating}</p>

  </div>;
};

export default MovieCard;
