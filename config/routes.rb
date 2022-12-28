Rails.application.routes.draw do
  
  resources :spots
  resources :users, only: [:create, :show, :update, :destroy]
  resources :sessions, only: [:create, :show, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
