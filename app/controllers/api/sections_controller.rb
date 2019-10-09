class Api::SectionsController < ApplicationController 

    def update 
    #    @sections = Project.find(params[:project_id]) 
       #I DO NOT KNOW HOW TO UPDATE MY SECTIONS SO THEY ARE DRAG AND DROPABLE 
    #    debugger
        if params[:update_order]
            new_order = params[:update_order]
            Section.reorder(new_order)
            @sections = Section.all 
            @sections = Section.order_sections(@sections)
            render :index 
        else 
            @section = Section.find(section_params[:id])
            @section.update_attributes(section_params)
            render :show
        end
    end 

    def index 
        debugger
        @sections = Project.find(params[:project_id]).sections
        @sections = Section.order_sections(@sections)
        render :index
    end 

    def create 
        @section = Section.create(section_params)
        prev_section = Section.find(@section.prev_id)
        prev_section.next_id = @section.id 
        # @section.project_id = params[:project_id]
        @section.save 
        # debugger
        project = Project.find(@section.project_id)
        @sections = project.sections
        @sections = Section.order_sections(@sections)
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