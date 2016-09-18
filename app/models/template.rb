class Template < ActiveRecord::Base
  belongs_to :button
  belongs_to :category
end
