

# json.set! :section do 
    @sections.each do |section|
        json.set! section.id do 
            json.extract! section, :id, :name, :id, :name, :prev_id, :next_id, :project_id, :created_at, :updated_at
        end 
    end 
        
    json.set! :order do 
        json.array! @order_arr 
    end 
# end 
