class Api::SectionsController < ApplicationController 

    def update 
    #    @sections = Project.find(params[:project_id]) 
       #I DO NOT KNOW HOW TO UPDATE MY SECTIONS SO THEY ARE DRAG AND DROPABLE 
       @section = Section.find(section_params[:id])
       @section.update_attributes(section_params)
       render :show
    end 

    def index 
        @sections = Project.find(params[:project_id]).sections
        render :index
    end 

    def create 
        @section = Section.create(section_params)
        # @section.project_id = params[:project_id]
        @section.save 
        # debugger
        project = Project.find(@section.project_id)
        @sections = project.sections
        render :index
    end 

    def show 
        @section = Section.find(params[:id])
        # @tasks = @section.tasks
        render :show
    end 

    def destroy 
        @section = Section.find(params[:id])
        @section.destroy
        project = Project.find(@section.project_id)
        @sections = project.sections
        render :index
        #I will make this after update
    end 

    private 

    def section_params 
        params.require(:section).permit(:id, :name, :prev_id, :next_id, :project_id)
    end 


end 