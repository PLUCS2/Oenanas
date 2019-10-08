# == Schema Information
#
# Table name: tasks
#
#  id             :bigint           not null, primary key
#  project_id     :integer          not null
#  section_id     :integer          not null
#  prev_id        :integer
#  next_id        :integer
#  creator_id     :integer          not null
#  title          :string           not null
#  description    :text
#  due_date       :date
#  priority_level :string
#  progress       :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Task < ApplicationRecord 

    VALID_NAMES = ["not started", "in progress", "waiting", "deffered", "done"]

    validates :project_id, :section_id, :creator_id, :title, :progress, presence: true 
    validates_inclusion_of :progress, in: VALID_NAMES, message: "That progress level is not an option"

    belongs_to :project, 
        primary_key: :id, 
        foreign_key: :project_id, 
        class_name: :project

    belongs_to :section, 
        primary_key: :id, 
        foreign_key: :section_id, 
        class_name: :Section

    belongs_to :creator,
        primary_key: :id, 
        foreign_key: :creator_id,  
        class_name: :User

end 
