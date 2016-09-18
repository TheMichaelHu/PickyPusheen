class Template < ActiveRecord::Base
  belongs_to :button
  belongs_to :category

  def generate_activity
    Activity.create!(title: title, description: description, user: button.user,
     is_nerd: is_nerd, has_face: has_face, level: level, category_id: category_id,
     visible: true, max_size: max_size)
  end
end
