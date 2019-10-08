
json.extract! @project, :id, :title, :owner_id, :default_view, :description, :created_at, :updated_at

@sections.each do |section|
    json.set! section.id do
        json.extract! section, :id, :name, :prev_id, :next_id
    end 
end 