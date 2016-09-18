class Button < ActiveRecord::Base
  belongs_to :user
  has_one :template

  def generate_slug_if_nil
    if self.button_slug.nil?
      self.button_slug = (0...8).map { ('a'..'z').to_a[rand(26)] }.join
    end
  end
end
