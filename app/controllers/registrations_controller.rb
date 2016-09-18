class RegistrationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  Devise::RegistrationsController
    clear_respond_to  
    respond_to :json
end
