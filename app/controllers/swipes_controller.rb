class SwipesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def swipe_left
    user = User.find(params[:user_id])
    Swipe.create!(user: user, activity_id: params[:id], yes: false)
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end

  def swipe_right
    user = User.find(params[:user_id])
    Swipe.create!(user: user, activity_id: params[:id], yes: true)
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end
end
