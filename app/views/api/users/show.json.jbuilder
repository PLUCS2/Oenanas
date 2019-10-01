json.user do 
    json.set! @user.id do 
        json.extract! @user, :first_name, :last_name, :role, :email, :about_me, :pronouns, :description
    end 
end 