class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :buttons
  has_many :activities
  has_many :swipes
  has_many :friendships
  has_many :friend_requests
  has_many :friends, :through => :friendships
end
