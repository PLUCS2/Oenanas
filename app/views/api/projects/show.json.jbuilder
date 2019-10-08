
json.set! :project do 
    json.extract! @project, :id, :title, :owner_id, :default_view, :description, :created_at, :updated_at
end

json.set! :sections do 
    if @sections
        @sections.each do |section|
            json.set! section.id do
                json.extract! section, :id, :name, :prev_id, :next_id, :created_at, :updated_at
            end 
        end 
    end 
end

# debugger
json.set! :tasks do
    if @tasks
        @tasks.each do |task|
            json.set! task.id do
                json.extract! task, :id, :title, :prev_id, :next_id, :project_id, :section_id, :creator_id, :description, :due_date, :priority_level, :progress, :created_at, :updated_at
            end 
        end 
    end 
end 