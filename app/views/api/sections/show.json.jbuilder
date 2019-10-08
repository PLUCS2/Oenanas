
json.extract! @section, :id, :name, :id, :name, :prev_id, :next_id, :project_id, :created_at, :updated_at

# if @tasks
    # @tasks.each do |task|
        # json.set! task.id do
            # json.extract! task, :id, :title, :prev_id, :next_id, :project_id, :section_id, :creator_id, :description, :due_date, :priority_level, :progress, :created_at, :updated_at
        # end 
    # end 
# end 