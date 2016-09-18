class Category < ActiveRecord::Base
  has_many :template
  has_many :activity
end
