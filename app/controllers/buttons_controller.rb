class ButtonsController < ApplicationController
  def create
    template = Template.new!(template_params())
    button = Button.create!(user: current_user, template: template)
    button.generate_slug_if_nil()
    render :json => {slug: button.button_slug}
  end

  def press
    button = Button.find_by(button_slug: params[:slug])
    activity = button.template.generate_activity()
    render :json => activity
  end

  private
    def template_params
      params.require(:title, :description).permit(:is_nerd, :has_face, :level, :category_id, :max_size)
    end
end
