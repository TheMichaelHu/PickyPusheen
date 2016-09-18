class CreateCategories < ActiveRecord::Migration
  def up
    create_table :categories do |t|
      t.string :name, null: false
      t.timestamps
    end

    ["grocery", "dining", "exercise"].each do |cat|
      Category.create(name: cat)
    end
  end

  def down
    drop_table :categories
  end
end
