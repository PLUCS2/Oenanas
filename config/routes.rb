Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do 

    resources :users, only: [:create, :show]

    resource :session, only: [:create, :destroy]

    resources :projects, only: [:index, :create, :destroy, :show, :update]

    resources :sections, only: [:update, :create, :destroy, :show, :index]

    resources :tasks, only: [:show, :update, :destroy, :create, :index]

  end 

end
