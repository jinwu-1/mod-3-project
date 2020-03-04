# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
cart1 = Cart.create()

product1 = Product.create(name: "Jersey", price: "80.00", image_url: "https://www.customizationdepot.com/new/media/assets/categories/5500/BA5500-ATL598.png")
product2 = Product.create(name: "Hoodie", price: "50.00", image_url: "http://t0.gstatic.com/images?q=tbn%3AANd9GcS-tOzxkrGb_Xlt4s2RBcd36RvyIpANtcBJ3ucqTLX-NxULEpBrswOl62Y9cyfas5t59m4X68aX&usqp=CAc")
product3 = Product.create(name: "Long-Sleeve", price: "30.00", image_url: "http://t0.gstatic.com/images?q=tbn%3AANd9GcT7KbTlvll0qGkqJJCZlIdWjiMzkF_u9ZFsM0GO8CF8Mx4gDHOu_Fj662TJJvGqjZ3WY3jKENE&usqp=CAc")
product4 = Product.create(name: "T-Shirt", price: "25.00", image_url: "https://cache.mrporter.com/variants/images/3633577411310822/in/w2000_q80.jpg")
product5 = Product.create(name: "Shorts", price: "30.00", image_url: "https://www.dhresource.com/0x0/f2/albu/g10/M00/F3/E8/rBVaWVwLLz2AOiQ-AAFxGXg9FTc977.jpg")
product6 = Product.create(name: "Hat", price: "25.00", image_url: "https://images-na.ssl-images-amazon.com/images/I/51oSO7gjW7L._AC_UX679_.jpg")
product7 = Product.create(name: "Beanie", price: "25.00", image_url: "https://cdn.shopify.com/s/files/1/0600/6685/products/blank-beanie-light-grey-merino-wool-2_1024x1024.jpg?v=1548361379")
product8 = Product.create(name: "Pant", price: "40.50", image_url: "https://cdn.sorsbt.com/oxxo/ContentImages/Product/19k/19KOX-BOSJOGCEP/orta-bel-jogger-pantolon_grey-melange-gri_5_enbuyuk.JPG?height=758")
product9 = Product.create(name: "Sneakers", price: "120.00", image_url: "https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-193-Royale-Blanco-3RMW-Product-102_3d9c4e83-a5c5-4326-91b8-0308fa05101e.jpg?v=1563990962")
product10 = Product.create(name: "Socks", price: "10.00", image_url: "https://www.kidicat.com/wp-content/uploads/2018/10/13-1.jpg") 
product11 = Product.create(name: "Necklace", price: "20.00", image_url: "https://www.kayoutlet.com/productimages/processed/V-401517002_0_800.jpg?pristine=true") 
product12 = Product.create(name: "Ring", price: "30.00", image_url: "https://cdn.shopify.com/s/files/1/2590/3848/products/24k_gold_ring_for_men_1.jpg?v=1538504812")
product13= Product.create(name: "Watch", price: "50.00", image_url: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8602661_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$")
product14 = Product.create(name: "Cologne", price: "35.00", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_aYbDXpKEIvCGzUoaDceTfLDwhzxYD4jH112s1cQ8ZVcMw4gGGRJ8VzjcsfKRTSHcVTIGoru9&usqp=CAc")
product15 = Product.create(name: "Pajama Set", price: "60.00", image_url: "https://cdn.shopify.com/s/files/1/1811/3881/products/black-white-plaid-men-s-two-piece-bamboo-viscose-pajama-set-4_590x_31b379cb-60d8-44ed-88c1-c51a77fa2894_grande.jpg?v=1570111049")



cart_item1 = CartItem.create(cart_id: cart1.id, product_id: product1.id)
cart_item2 = CartItem.create(cart_id: cart1.id, product_id: product4.id)
cart_item3 = CartItem.create(cart_id: cart1.id, product_id: product5.id)
cart_item4 = CartItem.create(cart_id: cart1.id, product_id: product7.id)
cart_item5 = CartItem.create(cart_id: cart1.id, product_id: product8.id)