class ActivitiesController < ApplicationController
  def index
    friend_ids = current_user.friends.map(&:id)
    render :json => Activity.where(user_id: friend_ids)
  end

  def create
    activity = Activity.create!(activity_params.merge({user: current_user}))
    render :json => activity
  end

  private
    def activity_params
      params.require(:title, :description).permit(:is_nerd, :has_face, :level, :category_id, :max_size)
    end
end
