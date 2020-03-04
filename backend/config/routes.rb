Rails.application.routes.draw do
  resources :cart_items
  resources :products, only: [:index, :show]

  delete "/cart_items", to: "cart_items#destroy_all"
  # resources :carts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
