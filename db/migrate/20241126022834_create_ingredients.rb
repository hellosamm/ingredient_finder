class CreateIngredients < ActiveRecord::Migration[7.1]
  def change
    create_table :ingredients do |t|
      t.references :recipe, null: false, foreign_key: true
      t.string :amount
      t.string :unit
      t.string :name

      t.timestamps
    end
  end
end
