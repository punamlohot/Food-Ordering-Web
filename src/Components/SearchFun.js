import React, { useEffect, useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchComponent = ({ masterCards, setCardArray, getRestaurantData }) => {
  const [SearchText, setSearchText] = useState("");

  const SearchRestaurant = () => {
    const filteredRestaurants = masterCards.filter((item) => {
      return item?.name?.toLowerCase().includes(SearchText.toLowerCase());
    });
    setCardArray(filteredRestaurants);

    if (SearchText == null) {
      getRestaurantData();
    }
  };

  return (
    <div className="container-fluid">
      <input
        type="text"
        value={SearchText}
        onChange={(e) => setSearchText(e.target.value)}
        id="inp"
        placeholder="Search Restaurant Here"
      />
      <button
        className="btn"
        type="button"
        id="Sbutton"
        onClick={SearchRestaurant}
      >
        Search
      </button>
      {/* <img src={<FontAwesomeIcon icon={faSearch} />} className="Search" alt="Search-Icon" /> */}
    </div>
  );
};

export default SearchComponent;
