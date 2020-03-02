# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cart1 = Cart.create()

product1 = Product.create(name: "Shirt", price: "24.90")
product2 = Product.create(name: "Bag", price: "45.00")
product3 = Product.create(name: "Pant", price: "25.60")
product4 = Product.create(name: "Hoodie", price: "40.50")
product5 = Product.create(name: "Hat", price: "20.00")

cart_item1 = CartItem.create(cart_id: cart1.id, product_id: product1.id)
cart_item2 = CartItem.create(cart_id: cart1.id, product_id: product4.id)
cart_item3 = CartItem.create(cart_id: cart1.id, product_id: product5.id)