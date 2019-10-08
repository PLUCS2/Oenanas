class AddColumnToSections < ActiveRecord::Migration[5.2]
  def change
    add_column :sections, :project_id, :integer, null: false
    add_index :sections, :project_id
  end
end
