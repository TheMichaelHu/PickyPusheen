class CreateButtons < ActiveRecord::Migration
  def change
    create_table :buttons do |t|
      t.string :button_slug, null: false
      t.integer :user_id
      t.integer :template_id
      t.timestamps null: false
    end
    add_index :buttons, [:user_id, :button_slug]
  end
end
