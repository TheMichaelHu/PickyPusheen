class RegistrationsController < ApplicationController
  Devise::RegistrationsController
    clear_respond_to  
    respond_to :json
end
