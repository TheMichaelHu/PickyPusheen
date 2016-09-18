class CreateSwipes < ActiveRecord::Migration
  def change
    create_table :swipes do |t|
      t.integer :user_id
      t.integer :activity_id
      t.boolean :yes
      t.timestamps null: false
    end
    add_index :swipes, [:user_id, :activity_id]
  end
end
