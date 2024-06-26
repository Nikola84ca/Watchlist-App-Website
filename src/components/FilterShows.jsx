import React, { useState, useEffect } from "react";

const FilterShows = ({ shows, onFilter }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    // Extract all unique genres from the shows
    const uniqueGenres = Array.from(
      new Set(shows.map((show) => show.Genre).flat())
    );
    setGenres(uniqueGenres);
  }, [shows]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    onFilter(event.target.value, selectedDate);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    onFilter(selectedGenre, event.target.value);
  };

  return (
    <div>
      <label htmlFor="genre" className="filter-txt">
        Filter shows by:
      </label>
      <select
        id="genre"
        className="filter-txt"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="" className="filter-txt">
          All Genres
        </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <label htmlFor="date" className="filter-txt">
        Date Released:
      </label>
      <select
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="filter-txt"
      >
        <option value="" className="filter-txt">
          All Dates
        </option>
        {/* Add options for dates here */}
      </select>
    </div>
  );
};

export default FilterShows;
