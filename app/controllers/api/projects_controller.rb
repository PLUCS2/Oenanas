
class Api::ProjectsController < ApplicationController 

    before_action :ensure_logged_in

    def index 
        @projects = User.find(current_user.id).projects
        render :index
    end 

    def show 
        # debugger
        @project = Project.find(params[:id])
        @sections = @project.sections 
        render :show
    end 

    def create 
        @project = Project.create(project_params)
        @project.owner_id = current_user.id 
        if @project.save!
            # debugger 
            render :show
        else 
            render json: @project.errors.full_messages, status: 422
        end 
    end 

    def update 
        # debugger; 
        @project = Project.find(project_params[:id]) 
        if @project.update_attributes(project_params)
            render :show 
        else 
            render json: @project.errors.full_messages, status: 422
        end 
    end 

    def destroy 
        # debugger
        @project = Project.find(params[:id])
        @project.destroy
        @user = current_user
        render 'api/users/show'
    end

    private 

    def project_params 
        params.require(:project).permit(:id, :title, :owner_id, :default_view, :description)
    end 

end 