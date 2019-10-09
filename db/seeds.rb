# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
User.destroy_all
Section.destroy_all

demo_user = User.create!({first_name: "Demo", last_name: "Demo", email: "demo@demo.com", password: "12345678", role: "Demo Login"})

project_board = Project.create!({title: "Demo Project", owner_id: demo_user.id, description: "Demo Board View", default_view: "board"})
project_list = Project.create!({title: "Demo Project", owner_id: demo_user.id, description: "Demo List View", default_view: "list"})

section_1 = Section.create!({name: "section_1", project_id: project_board.id})
section_2 = Section.create!({name: "section_2", project_id: project_board.id})
section_3 = Section.create!({name: "section_3", project_id: project_board.id})
section_4 = Section.create!({name: "section_4", project_id: project_board.id})

section_1[:next_id] = section_2[:id]
section_2[:next_id] = section_3[:id]
section_3[:next_id] = section_4[:id]

section_4[:prev_id] = section_3[:id]
section_3[:prev_id]= section_2[:id]
section_2[:prev_id] = section_1[:id]

section_1.save!
section_2.save!
section_3.save!
section_4.save!