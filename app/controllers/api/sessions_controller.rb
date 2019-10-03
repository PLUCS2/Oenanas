class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login!(@user)
            render 'api/users/show'
        else 
            # debugger 
            render json: ["The username or password is not correct."], status: 401
        end 
    end 

    def destroy 
        if logged_in? 
            logout! 
            render json: { message: "Logged Out" }
        else 
            render json: ["No current user"], status: 404
        end 
    end 

end 