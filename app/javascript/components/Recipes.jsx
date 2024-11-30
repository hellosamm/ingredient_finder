import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/recipes/index";
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

  const allRecipes = recipes.map((recipe, index) => (
    <div key={index}>
      <div>
        <h4>{recipe.name}</h4>
        <Link to={`/recipe/${recipe.id}`}>view recipe</Link>
      </div>
    </div>
  ));

  const noRecipe = (
    <div>
      <h4>no recipes yet</h4>
    </div>
  );

  return (
    <>
      <div>
        <h2>these are the recipes</h2>
      </div>
      <div>{recipes.length > 0 ? allRecipes : noRecipe}</div>
    </>
  );
};

export default Recipes;
