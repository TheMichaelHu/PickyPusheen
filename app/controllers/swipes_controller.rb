class SwipesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_filter :authenticate_user!

  def swipe_left
    Swipe.create!(user: current_user, activity_id: params[:id], yes: false)
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end

  def swipe_right
    Swipe.create!(user: current_user, activity_id: params[:id], yes: true)
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end
end
