class Button < ActiveRecord::Base
  belongs_to :user
  has_one :template
end
