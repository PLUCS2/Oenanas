class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.text :description
      t.string :default_view, null: false 
      t.index :owner_id

      t.timestamps
    end
  end
end
