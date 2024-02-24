import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [showMovies, setShowMovies] = useState(true);

  const toggleComponent = () => {
    setShowMovies((prevShowMovies) => !prevShowMovies);
  };

  return (
    <div className="App">
      <h1>React Movies List</h1>
      <button data-testid="toggle-btn" onClick={toggleComponent}>
        {showMovies ? "Add Movie" : "Show Movies"}
      </button>
      <div data-testid="container">
        {showMovies ? <MovieList /> : <AddMovie />}
      </div>
    </div>
  );
};

export default App;
