class SessionsController < ApplicationController
  respond_to :json

  def create
    user = User.create!(user_params())
    render :json => user
  end

  def user_params
    params.require(:email_address, :password, :password_confirmation)
  end
end
