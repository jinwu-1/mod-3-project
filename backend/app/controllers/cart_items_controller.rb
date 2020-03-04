class CartItemsController < ApplicationController

    def index
        @cart_items = CartItem.all
        render json: @cart_items
    end

    def show
        @cart_item = CartItem.find(params[:id])
        render json: @cart_item
    end

    def new 
        @cart_item = CartItem.new
        render json: @cart_item
    end

    def create
        @cart_item = CartItem.create(cart_item_params)
        render json: @cart_item
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        @cart_items = CartItem.all
        render json: @cart_items
    end
    
    def destroy_all
        CartItem.destroy_all
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:cart_id, :product_id)
    end



end
