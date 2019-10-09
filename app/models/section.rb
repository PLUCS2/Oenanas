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
        return [sections[0]] if sections.length == 1 
        return [] if sections.empty? 

        ans = []

        if prev_id == nil 
            sections.each do |section| 
                if section[:prev_id] == nil 
                    new_sections = sections - [section]
                    # debugger
                    ans = [section] + Section.order_sections(new_sections, section[:next_id])
                    return ans 
                end 
            end
        else
            sections.each do |section|
                if section[:id] == prev_id
                    new_sections = sections - [section]
                    ans = [section] + Section.order_sections(new_sections, section[:next_id])
                    return ans 
                end 
            end 
        end 
        # debugger
        return ans
    end 

end 
