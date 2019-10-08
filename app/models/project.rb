# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  owner_id     :integer          not null
#  description  :text
#  default_view :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#


class Project < ApplicationRecord 

    validates :title, :owner_id, :default_view, presence: true 

    belongs_to :owner, 
        primary_key: :id, 
        foreign_key: :owner_id, 
        class_name: :User

    has_many :sections, 
        primary_key: :id, 
        foreign_key: :project_id, 
        class_name: :Section

end 
