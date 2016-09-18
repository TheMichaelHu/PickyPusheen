class ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_filter :authenticate_user!

  def index
    friend_ids = current_user.friends.map(&:id)
    swiped = current_user.swipes.map(&:activity_id)
    render :json => Activity.where(user_id: friend_ids).where.not(id: swiped)
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
