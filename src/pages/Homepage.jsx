import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import DisplayCards from "../components/DisplayCards";
import API from "../utils/API";
import AddButton from "../components/AddButton";

const Homepage = () => {
  const [searchData, setSearchData] = useState({
    search: "",
    results: [],
  });

  const searchTvShow = async (query) => {
    try {
      const response = await API.search(query);
      setSearchData({
        ...searchData,
        results: response.data.map((item) => item.show),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  // When the form is submitted, search the TVmaze API for `searchData.search`
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    searchTvShow(searchData.search);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Searchbar
        search={searchData.search}
        handleSearchSubmit={handleSearchSubmit}
        handleInputChange={handleInputChange}
      />
      <DisplayCards
        results={searchData.results}
        action={({ show }) => <AddButton show={show} />}
      />
    </div>
  );
};

export default Homepage;
