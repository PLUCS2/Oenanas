class Api::TasksController < ApplicationController 

    def create 
        # debugger
        @task = Task.new(task_params)
        @task.creator_id ||= current_user.id 
        @task.save 
        # debugger
        @project = Project.find(task_params[:project_id])
        @sections = @project.sections
        @tasks = [] 
            @sections.each do |section|
               @tasks += section.tasks
            end 
        render 'api/projects/show'
    end 

    def show 
        @task = Task.find(params[:id])
        render :show 
    end 

    def destroy 
        @task = Task.find(params[:id])
        @project = Project.find(@task.project.id)
        @task.destroy
        render 'api/projects/show'
    end 

    def update 
        #DO NOT KNOW HOW TO UPDATE PREV AND NEXT YET but that obviously needs to happen LOL
        @task = Task.find(task_params[:id])
        @task.update_attributes(task_params)
        render :show
    end 

    private

    def task_params 
        params.require(:task).permit(:id, :title, :prev_id, :next_id, :project_id, :section_id, :creator_id, :description, :due_date, :priority_level, :progress, :created_at, :updated_at)
    end 

end 