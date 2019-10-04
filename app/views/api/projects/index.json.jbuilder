
@projects.each do |project|
    json.set project.id do 
        json.extract! @project, :id, :title, :owner_id, :default_view, :description
    end 
end 