
class Api::ProjectsController < ApplicationController 

    before_action :ensure_logged_in

    def index 
        @projects = User.find(current_user.id).projects
        render :index
    end 

    def show 
        @project = Project.find(params[:id])
        render :show
    end 

    def create 
        @project = Project.create(project_params)
        if @project.save!
            render :show
        else 
            render json: @project.errors.full_messages, status: 422
        end 
    end 

    def update 
        @project = Project.find(params[:project][:id]) 
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
        params.require(:project).permit(:title, :owner_id, :default_view, :description)
    end 

end 