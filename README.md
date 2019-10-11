# README

[Find oenana here](https://oenana.herokuapp.com/#/)

Oenana is a clone of [Asana](https://asana.com/). The app allows users to create projects, add sections to those projects, and add tasks to those sections. The sections and tasks can be reorganized by dragging and dropping them into new positins. These projects can eigher be private or shared with a team. In the instances where teams choose to work on projects together, tasks can be assigned to different team members. 

## Technologies:
- React / Redux
- Ruby on Rails
- PostgresSQL
- Javascript

## Key Features:
[Design Docs](https://github.com/PLUCS2/Oenanas/wiki)

### User Authentication
- Users can login with an existing account, or create an account by signing up 
- Signup checks for a unique email address
- Invalid credentials will trigger frontend and backend errors 

### Drag and Drop Sections 
- Sections can be moved around on the page and retain their new positions
- The backened updates section components (a linked list) when the component unmounts
- When passed to the frontend sections are ordered based on previous_id's and next_id's (stored and updated in the database)
- Components only update backend when component unmounts to decrease time complexity

##### Model for Sections: 
- self.order_sections:  
⋅⋅* orders the sections to pass to frontend on Project show page 
- self.reorder: 
⋅⋅* updates previous and next id's of sections on the backend when Project component unmounts 
- update_surroundings: 
⋅⋅* updates prior and post section id's when a section is deleted

````class Section < ApplicationRecord 

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

        return [sections[0][:id]] if sections.length == 1 
        return [] if sections.empty? 

        ans = []

        if prev_id == nil 
            sections.each do |section| 
                if section[:prev_id] == nil 
                    new_sections = sections - [section]
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

        return ans

    end 

    def self.reorder(arr)

        arr.each_with_index do |id, index|
            section = Section.find(id)

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

            section.save! 
        end 

    end 

    def update_surroundings 

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

        if last 
            last.next_id = forward_id
            last.save! 
        end 

        if forward 
            forward.prev_id = last_id
            forward.save! 
        end 

    end 

end
````


##Why Oenana?##


## Future Implementations:
- List project view 
- Tasks 
- Companies 
- Teams 
- Privacy settings

