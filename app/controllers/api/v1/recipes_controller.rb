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

    recipes = ingredients.map(&:recipe).uniq

    render json: recipes.map { |recipe| { id: recipe.id, name: recipe.name }}
  end
end
