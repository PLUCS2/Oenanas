class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :project_id, null: false
      t.integer :section_id, null: false 
      t.integer :prev_id 
      t.integer :next_id 
      t.integer :creator_id, null: false 
      t.string :title, null: false 
      t.text :description
      t.date :due_date
      t.string :priority_level
      t.string :progress, null: false 
      t.index :project_id
      t.index :section_id
      t.index :prev_id
      t.index :next_id
      t.index :creator_id

      t.timestamps
    end
  end
end
