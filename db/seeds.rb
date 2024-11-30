require 'json'

file = File.read(Rails.root.join('db', 'recipes.json'))
data = JSON.parse(file)

data.each do |recipe_data|
  recipe = Recipe.create!(name: recipe_data["recipe_name"])

  recipe_data["ingredients"].each do |ingredient_data|
    puts "debug: #{ingredient_data.inspect}"

    Ingredient.create!(
      recipe: recipe,
      name: ingredient_data["name"],
      amount: ingredient_data["amount"].to_s.strip,
      unit: ingredient_data["unit"],
    )
  end
end

puts "seed data created successfully"