import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/search";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not okay.");
      })
      .then((res) => setRecipes(res))
      .catch(() => navigate("/"));
  }, []);

  const handleSearch = () => {
    fetch(`/api/v1/search?query=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("error fetching search results:", error));
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

      <div>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe) => (
              // <li key={recipe.id}>{recipe.name}</li>
              <li>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>no recipes found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
