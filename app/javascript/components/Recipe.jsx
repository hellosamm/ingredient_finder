import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `/api/v1/show/${id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setRecipe(data.recipe);
        setIngredients(data.ingredients);
      })

      .catch((err) => {
        setError("failed to laod");
        console.error(err);
      });
  }, [id, navigate]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => navigate("/recipes")}>go back to recipes</button>
      </div>
    );
  }

  if (!recipe) {
    return;
    <p> loading recipe... </p>;
  }

  return (
    <div className="full-recipe">
      <div className="recipe-name">
        <h2>{recipe.name}</h2>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </a>
      </div>
      <div className="recipe-ingredients">
        <h3>ingredients</h3>
        <ul>
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.amount} {ingredient.unit} {ingredient.name}
              </li>
            ))
          ) : (
            <p>no ingredients found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
