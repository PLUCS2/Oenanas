class SectionsController < ApplicationController 

    def update 
       @sections = Project.find(params[:project_id]) 
       #I DO NOT KNOW HOW TO UPDATE MY SECTIONS SO THEY ARE DRAG AND DROPABLE 
    end 

    def create 
        @section = Section.create(section_params)
        @section.project_id = params[:project_id]
        @section.save 
        # debugger
        render "api/projects/#{@section.project_id}"
    end 

    def destroy 
        #I will make this after update
    end 

    private 

    def section_params 
        params.require(:section).permit(:name, :prev_id, :next_id)
    end 


end 