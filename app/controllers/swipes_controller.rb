class SwipesController < ApplicationController
  def swipe_left
    user = params[:user_id]
    Swipe.create!(user: user, activity_id: params[:id], yes: false)
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end

  def swipe_right
    user = params[:user_id]
    Swipe.create!(user: user, activity_id: params[:id], yes: true)
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end
end
