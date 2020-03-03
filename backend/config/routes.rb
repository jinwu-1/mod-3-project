Rails.application.routes.draw do
  resources :cart_items, only: [:show, :index, :destroy]
  resources :products, only: [:index, :show]
  # resources :carts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
