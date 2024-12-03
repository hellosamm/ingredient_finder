import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const url = "/api/v1/search";
  //   fetch(url)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw new Error("Network response was not okay.");
  //     })
  //     .then((res) => setRecipes(res))
  //     .catch(() => navigate("/"));
  // }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const queryFromUrl = urlParams.get("query");

    if (queryFromUrl) {
      setQuery(queryFromUrl);
      fetch(`/api/v1/search?query=${encodeURIComponent(queryFromUrl)}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) =>
          console.error("error fetching search results:", error)
        );
    }
  }, [location.search]);

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  // const handleSearch = () => {
  //   fetch(`/api/v1/search?query=${encodeURIComponent(query)}`)
  //     .then((response) => response.json())
  //     .then((data) => setRecipes(data))
  //     .catch((error) => console.error("error fetching search results:", error));
  // };

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
              <li key={recipe.recipe_id}>
                <Link to={`/recipe/${recipe.recipe_id}`}>
                  {recipe.recipe_name}
                </Link>
                <span>({recipe.amount_and_unit})</span>
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
