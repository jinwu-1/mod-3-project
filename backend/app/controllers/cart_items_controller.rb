class CartItemsController < ApplicationController

    def index
        @cart_items = CartItem.all
        render json: @cart_items
    end

    def show
        @cart_item = CartItem.find(params[:id])
        render json: @cart_item
    end

end
