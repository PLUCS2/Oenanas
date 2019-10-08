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
        
end 
