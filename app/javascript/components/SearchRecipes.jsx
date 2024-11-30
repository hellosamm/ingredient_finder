import React, { useState } from "react";

const SearchRecipes = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by ingredient..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
};

export default SearchRecipes;
