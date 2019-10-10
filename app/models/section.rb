# == Schema Information
#
# Table name: sections
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  prev_id    :integer
#  next_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  project_id :integer          not null
#

class Section < ApplicationRecord 

    validates :name, :project_id, presence: true 

    belongs_to :project, 
        primary_key: :id, 
        foreign_key: :project_id, 
        class_name: :Project

    has_many :tasks, 
        primary_key: :id, 
        foreign_key: :section_id, 
        class_name: :Task    
        
    def self.order_sections(sections, prev_id = nil)
        # debugger
        return [sections[0][:id]] if sections.length == 1 
        return [] if sections.empty? 

        ans = []

        if prev_id == nil 
            sections.each do |section| 
                if section[:prev_id] == nil 
                    new_sections = sections - [section]
                    # debugger
                    ans = [section[:id]] + Section.order_sections(new_sections, section[:next_id])
                    return ans 
                end 
            end
        else
            sections.each do |section|
                if section[:id] == prev_id
                    new_sections = sections - [section]
                    ans = [section[:id]] + Section.order_sections(new_sections, section[:next_id])
                    return ans 
                end 
            end 
        end 
        # debugger
        return ans
    end 

    def self.reorder(arr)
        arr.each_with_index do |id, index|
            section = Section.find(id)
            # debugger
            if index == 0 
                section.prev_id = nil
                section.next_id = arr[index + 1]
            elsif index == arr.length - 1 
                section.prev_id = arr[index - 1]
                section.next_id = nil
            else 
                section.prev_id = arr[index - 1]
                section.next_id = arr[index + 1]
            end 
            # debugger
            section.save! 
            # debugger
        end 
    end 

    def update_surroundings 
        # debugger 
        if self.prev_id 
            last = Section.find(self.prev_id)
            last_id = last.id
        else 
            last_id = nil
        end 

        if self.next_id 
            forward = Section.find(self.next_id)
            forward_id = forward.id
        else 
            forward_id = nil 
        end 

        # debugger
        if last 
            last.next_id = forward_id
            last.save! 
        end 

        if forward 
            forward.prev_id = last_id
            forward.save! 
        end 
        # debugger
    end 

end 
