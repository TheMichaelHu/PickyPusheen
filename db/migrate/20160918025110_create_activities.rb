class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.integer :user_id
      t.string :title, null: false
      t.text :description, null: false
      t.integer :category_id, null: false
      t.integer :max_size, default: 1, null: false
      t.boolean :is_nerd
      t.boolean :has_face
      t.integer :level
      t.boolean :visible, default: true
      t.timestamps null: false
    end
    add_index :activities, [:user_id, :category_id]
  end
end
