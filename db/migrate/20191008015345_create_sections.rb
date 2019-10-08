class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :name, null: false 
      t.integer :prev_id
      t.integer :next_id 
      t.index :name 
      t.index :prev_id
      t.index :next_id

      t.timestamps
    end
  end
end
