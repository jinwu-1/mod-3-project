class CartItemsController < ApplicationController

    def index
        @cart_items = CartItem.all
        render json: @cart_items
    end

    def delete
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
    end

end
