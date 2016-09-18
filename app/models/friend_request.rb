class FriendRequest < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => 'User'
  after_save :created_friendship

  def accept
    update_attributes(:status  => 'accepted')
  end

  private
    def created_friendship
      if status_changed? && status == 'accepted'
        Friendship.create!(user: user, friend: friend)
        Friendship.create!(user: friend, friend: user)
      end
    end
end
