Rails.application.routes.draw do
  resources :users
  resources :tweets

  get '/sign_in', to: 'sessions#sign_in', as: 'sign_in'
  post '/sign_in', to: 'sessions#create'
  get '/sign_out', to: 'sessions#sign_out', as: 'sign_out'
  delete '/sign_out', to: 'sessions#destroy'

  root 'home#dashboard'

end
