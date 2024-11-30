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

end
