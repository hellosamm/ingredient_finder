class Api::V1::RecipesController < ApplicationController
  def index
    recipe = Recipe.all.order(created_at: :desc)
    render json: recipe
  end

  def create
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: {
      recipe: recipe, 
      ingredients: recipe.ingredients
    }
  end

  def destroy
  end

  def search
    query = params[:query].downcase

    ingredients = Ingredient.where("Lower(name) LIKE ?", "%#{query}%")

  #   recipes = ingredients.map(&:recipe).uniq

  #   render json: recipes.map { |recipe| { id: recipe.id, name: recipe.name,amount_and_unit: "#{ingredient.amount} #{ingredient.unit}"}
  # }

    recipes = ingredients.map do |ingredient|
      {
        recipe_id: ingredient.recipe.id,
        recipe_name: ingredient.recipe.name,
        amount_and_unit: "#{ingredient.amount} #{ingredient.unit}"
      }
    end

    unique_recipes = recipes.uniq { |recipe| recipe[:recipe_id]}

    render json: unique_recipes
  end
end
