@sections.each do |section|
    json.set! section.id do 
        json.extract! section, :id, :name, :id, :name, :prev_id, :next_id, :project_id, :created_at, :updated_at
    end 
end 