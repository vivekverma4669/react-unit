import React, { useState } from "react";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    imdbID: "",
    type: "",
    rating: "",
    poster: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // if (response.ok) {
      //   setFormData({
      //     title: "",
      //     year: "",
      //     imdbID: "",
      //     type: "",
      //     rating: "",
      //     poster: "",
      //   });

        
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div data-testid="add-movie">
      <h1>Add Movie</h1>
      <form data-testid="add-movie-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />

        <label>Year:</label>
        <input type="text" name="year" value={formData.year} onChange={handleChange} />

        <label>ID:</label>
        <input type="text" name="imdbID" value={formData.imdbID} onChange={handleChange} />

        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Select a type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>

        <label>Rating:</label>
        <input type="text" name="rating" value={formData.rating} onChange={handleChange} />

        <label>Poster:</label>
        <input type="text" name="poster" value={formData.poster} onChange={handleChange} />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
