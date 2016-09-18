class Activity < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  has_many :swipes
end
