class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
      t.integer :user_id
      t.integer :friend_id
      t.string :status
      t.timestamps null: false
    end
  end
end
